import { color } from './colors';
import { Effects, Palette } from './model';

export interface FontOptions {
    bold?: boolean;
    italic?: boolean;
    mono?: boolean;
    link?: string;
    font?: Palette;
    background?: Palette;
    effects?: [Effects];
}

export function markdown(text: string, options: FontOptions): string {
    let result = text;
    if (options) {
        if (options.bold) {
            result = color(`**${result}**`, { font: 'yellow', effects: ['bright'] });
        }
        if (options.italic) {
            result = color(`_${result}_`, { font: 'magenta', effects: ['italic'] });
        }
        if (options.mono) {
            result = color(`\`${result}\``, { font: 'green' });
        }
        if (options.link) {
            result = `[${result}](${color(options.link, { font: 'blue', effects: ['underscore'] })})`;
        }
    }
    return result;
}
