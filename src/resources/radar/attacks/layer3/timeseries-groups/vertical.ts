// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as VerticalAPI from 'cloudflare/resources/radar/attacks/layer3/timeseries-groups/vertical';

export class Vertical extends APIResource {
  /**
   * Percentage distribution of attacks by vertical used over time.
   */
  list(query?: VerticalListParams, options?: Core.RequestOptions): Core.APIPromise<VerticalListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<VerticalListResponse>;
  list(
    query: VerticalListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<VerticalListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return (
      this._client.get('/radar/attacks/layer3/timeseries_groups/vertical', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: VerticalListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface VerticalListResponse {
  meta: unknown;

  serie_0: VerticalListResponse.Serie0;
}

export namespace VerticalListResponse {
  export interface Serie0 {
    timestamps: Array<string>;
    [k: string]: Array<string>;
  }
}

export interface VerticalListParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * For example, use `7d` and `7dControl` to compare this week with the previous
   * week. Use this parameter or set specific start and end dates (`dateStart` and
   * `dateEnd` parameters).
   */
  dateRange?: Array<
    | '1d'
    | '2d'
    | '7d'
    | '14d'
    | '28d'
    | '12w'
    | '24w'
    | '52w'
    | '1dControl'
    | '2dControl'
    | '7dControl'
    | '14dControl'
    | '28dControl'
    | '12wControl'
    | '24wControl'
  >;

  /**
   * Array of datetimes to filter the start of a series.
   */
  dateStart?: Array<string>;

  /**
   * Together with the `location` parameter, will apply the filter to origin or
   * target location.
   */
  direction?: 'ORIGIN' | 'TARGET';

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Limit the number of objects (eg browsers, verticals, etc) to the top items over
   * the time range.
   */
  limitPerGroup?: number;

  /**
   * Array of comma separated list of locations (alpha-2 country codes). Start with
   * `-` to exclude from results. For example, `-US,PT` excludes results from the US,
   * but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Normalization method applied. Refer to
   * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
   */
  normalization?: 'PERCENTAGE' | 'MIN0_MAX';
}

export namespace Vertical {
  export import VerticalListResponse = VerticalAPI.VerticalListResponse;
  export import VerticalListParams = VerticalAPI.VerticalListParams;
}