// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as CurrentsAPI from 'cloudflare/resources/spectrum/analytics/aggregates/currents';

export class Currents extends APIResource {
  /**
   * Retrieves analytics aggregated from the last minute of usage on Spectrum
   * applications underneath a given zone.
   */
  get(
    zone: string,
    query?: CurrentGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CurrentGetResponse>;
  get(zone: string, options?: Core.RequestOptions): Core.APIPromise<CurrentGetResponse>;
  get(
    zone: string,
    query: CurrentGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CurrentGetResponse> {
    if (isRequestOptions(query)) {
      return this.get(zone, {}, query);
    }
    return (
      this._client.get(`/zones/${zone}/spectrum/analytics/aggregate/current`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: CurrentGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type CurrentGetResponse = Array<unknown>;

export interface CurrentGetParams {
  /**
   * Comma-delimited list of Spectrum Application Id(s). If provided, the response
   * will be limited to Spectrum Application Id(s) that match.
   */
  app_id_param?: string;

  /**
   * Comma-delimited list of Spectrum Application Id(s). If provided, the response
   * will be limited to Spectrum Application Id(s) that match.
   */
  appID?: string;

  /**
   * Co-location identifier.
   */
  colo_name?: string;
}

export namespace Currents {
  export import CurrentGetResponse = CurrentsAPI.CurrentGetResponse;
  export import CurrentGetParams = CurrentsAPI.CurrentGetParams;
}