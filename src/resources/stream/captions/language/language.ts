// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as LanguageAPI from 'cloudflare/resources/stream/captions/language/language';
import * as CaptionsAPI from 'cloudflare/resources/stream/captions/captions';
import * as VttAPI from 'cloudflare/resources/stream/captions/language/vtt';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class Language extends APIResource {
  vtt: VttAPI.Vtt = new VttAPI.Vtt(this._client);

  /**
   * Uploads the caption or subtitle file to the endpoint for a specific BCP47
   * language. One caption or subtitle file per language is allowed.
   */
  update(
    identifier: string,
    language: string,
    params: LanguageUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaptionsAPI.Caption> {
    const { account_id, ...body } = params;
    return (
      this._client.put(
        `/accounts/${account_id}/stream/${identifier}/captions/${language}`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: CaptionsAPI.Caption }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes the captions or subtitles from a video.
   */
  delete(
    identifier: string,
    language: string,
    params: LanguageDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LanguageDeleteResponse> {
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/stream/${identifier}/captions/${language}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: LanguageDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the captions or subtitles for provided language.
   */
  get(
    identifier: string,
    language: string,
    params: LanguageGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaptionsAPI.Caption> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/stream/${identifier}/captions/${language}`,
        options,
      ) as Core.APIPromise<{ result: CaptionsAPI.Caption }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type LanguageDeleteResponse = string;

export interface LanguageUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The WebVTT file containing the caption or subtitle content.
   */
  file: string;
}

export interface LanguageDeleteParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface LanguageGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Language {
  export import LanguageDeleteResponse = LanguageAPI.LanguageDeleteResponse;
  export import LanguageUpdateParams = LanguageAPI.LanguageUpdateParams;
  export import LanguageDeleteParams = LanguageAPI.LanguageDeleteParams;
  export import LanguageGetParams = LanguageAPI.LanguageGetParams;
  export import Vtt = VttAPI.Vtt;
  export import VttGetResponse = VttAPI.VttGetResponse;
  export import VttGetParams = VttAPI.VttGetParams;
}