import { Axis } from '../../axis';
import { Channel } from '../../channel';
import { Config } from '../../config';
import { DateTime } from '../../datetime';
import { FieldDef } from '../../fielddef';
import { VgAxis } from '../../vega.schema';
import { UnitModel } from '../unit';
export declare function format(specifiedAxis: Axis, channel: Channel, fieldDef: FieldDef<string>, config: Config): string;
/**
 * Default rules for whether to show a grid should be shown for a channel.
 * If `grid` is unspecified, the default value is `true` for ordinal scales that are not binned
 */
export declare function gridShow(model: UnitModel, channel: Channel): boolean;
export declare function grid(model: UnitModel, channel: Channel, isGridAxis: boolean): boolean;
export declare function gridScale(model: UnitModel, channel: Channel, isGridAxis: boolean): string;
export declare function orient(specifiedAxis: Axis, channel: Channel): "left" | "right" | "top" | "bottom";
export declare function tickCount(specifiedAxis: Axis, channel: Channel, fieldDef: FieldDef<string>): number;
export declare function title(specifiedAxis: Axis, fieldDef: FieldDef<string>, config: Config, isGridAxis: boolean): string;
export declare function values(specifiedAxis: Axis): number[] | DateTime[];
export declare function zindex(specifiedAxis: Axis, isGridAxis: boolean): number;
export declare function domainAndTicks(property: keyof VgAxis, specifiedAxis: Axis, isGridAxis: boolean, channel: Channel): any;
export declare const domain: typeof domainAndTicks;
export declare const ticks: typeof domainAndTicks;
