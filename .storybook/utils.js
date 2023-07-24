import { readFileSync } from 'fs';
import path from 'path';

export function getComponentPaths() {
    let componentsDts;

    try {
        componentsDts = readFileSync(path.resolve(process.cwd(), './.nuxt/components.d.ts'), 'utf-8');
    } catch (error) {
        throw new Error('Failed to read .nuxt/components.d.ts');
    }

    const componentMatch = componentsDts.match(
        /export interface GlobalComponents \{\s*(?<components>[^}]*)\s*}/m
    )?.groups.components;

    if (!componentMatch) {
        throw new Error('Failed to parse .nuxt/components.d.ts');
    }

    const componentLines = componentMatch
        .split('\n')
        .filter((line) => !line.includes('/node_modules/'))
        .map((line) => line.trim())
        .filter(Boolean);

    const componentPaths = new Map(
        componentLines.map((line) => {
            const match = line.match(
                /^'(?<componentName>[^']+)': typeof import\("(?<componentPath>[^"]+)"\)\['default']$/
            );

            if (!match) {
                throw new Error(`Failed to parse .nuxt/components.d.ts line "${line}"`);
            }

            const { componentName, componentPath } = match.groups;

            return [componentName, componentPath.replace(/^\.\./, '~')];
        })
    );

    return componentPaths;
}
