import { Channel } from '../../channel';
import { FieldDef } from '../../fielddef';
import { Domain, ScaleConfig, ScaleType } from '../../scale';
import { VgDomain, VgSortField } from '../../vega.schema';
import { UnitModel } from '../unit';
export declare function initDomain(domain: Domain, fieldDef: FieldDef<string>, scale: ScaleType, scaleConfig: ScaleConfig): Domain;
export declare function parseDomain(model: UnitModel, channel: Channel): VgDomain;
export declare function domainSort(model: UnitModel, channel: Channel, scaleType: ScaleType): VgSortField;
/**
 * Determine if a scale can use unaggregated domain.
 * @return {Boolean} Returns true if all of the following conditons applies:
 * 1. `scale.domain` is `unaggregated`
 * 2. Aggregation function is not `count` or `sum`
 * 3. The scale is quantitative or time scale.
 */
export declare function canUseUnaggregatedDomain(fieldDef: FieldDef<string>, scaleType: ScaleType): {
    valid: boolean;
    reason?: string;
};
/**
 * Union two data domains. A unioned domain is always sorted.
 */
export declare function unionDomains(domain1: VgDomain, domain2: VgDomain): VgDomain;
