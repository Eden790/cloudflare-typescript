// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DNSSECAPI from 'cloudflare/resources/dnssec';

export class DNSSEC extends APIResource {
  /**
   * Delete DNSSEC.
   */
  delete(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<DNSSECDeleteResponse> {
    return (
      this._client.delete(`/zones/${zoneId}/dnssec`, options) as Core.APIPromise<{
        result: DNSSECDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enable or disable DNSSEC.
   */
  edit(
    zoneId: string,
    body: DNSSECEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSSECEditResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/dnssec`, { body, ...options }) as Core.APIPromise<{
        result: DNSSECEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Details about DNSSEC status and configuration.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<DNSSECGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/dnssec`, options) as Core.APIPromise<{ result: DNSSECGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type DNSSECDeleteResponse = unknown | string;

export interface DNSSECEditResponse {
  /**
   * Algorithm key code.
   */
  algorithm?: string | null;

  /**
   * Digest hash.
   */
  digest?: string | null;

  /**
   * Type of digest algorithm.
   */
  digest_algorithm?: string | null;

  /**
   * Coded type for digest algorithm.
   */
  digest_type?: string | null;

  /**
   * If true, multi-signer DNSSEC is enabled on the zone, allowing multiple providers
   * to serve a DNSSEC-signed zone at the same time. This is required for DNSKEY
   * records (except those automatically generated by Cloudflare) to be added to the
   * zone.
   *
   * See
   * [Multi-signer DNSSEC](https://developers.cloudflare.com/dns/dnssec/multi-signer-dnssec/)
   * for details.
   */
  dnssec_multi_signer?: boolean;

  /**
   * If true, allows Cloudflare to transfer in a DNSSEC-signed zone including
   * signatures from an external provider, without requiring Cloudflare to sign any
   * records on the fly.
   *
   * Note that this feature has some limitations. See
   * [Cloudflare as Secondary](https://developers.cloudflare.com/dns/zone-setups/zone-transfers/cloudflare-as-secondary/setup/#dnssec)
   * for details.
   */
  dnssec_presigned?: boolean;

  /**
   * Full DS record.
   */
  ds?: string | null;

  /**
   * Flag for DNSSEC record.
   */
  flags?: number | null;

  /**
   * Code for key tag.
   */
  key_tag?: number | null;

  /**
   * Algorithm key type.
   */
  key_type?: string | null;

  /**
   * When DNSSEC was last modified.
   */
  modified_on?: string | null;

  /**
   * Public key for DS record.
   */
  public_key?: string | null;

  /**
   * Status of DNSSEC, based on user-desired state and presence of necessary records.
   */
  status?: 'active' | 'pending' | 'disabled' | 'pending-disabled' | 'error';
}

export interface DNSSECGetResponse {
  /**
   * Algorithm key code.
   */
  algorithm?: string | null;

  /**
   * Digest hash.
   */
  digest?: string | null;

  /**
   * Type of digest algorithm.
   */
  digest_algorithm?: string | null;

  /**
   * Coded type for digest algorithm.
   */
  digest_type?: string | null;

  /**
   * If true, multi-signer DNSSEC is enabled on the zone, allowing multiple providers
   * to serve a DNSSEC-signed zone at the same time. This is required for DNSKEY
   * records (except those automatically generated by Cloudflare) to be added to the
   * zone.
   *
   * See
   * [Multi-signer DNSSEC](https://developers.cloudflare.com/dns/dnssec/multi-signer-dnssec/)
   * for details.
   */
  dnssec_multi_signer?: boolean;

  /**
   * If true, allows Cloudflare to transfer in a DNSSEC-signed zone including
   * signatures from an external provider, without requiring Cloudflare to sign any
   * records on the fly.
   *
   * Note that this feature has some limitations. See
   * [Cloudflare as Secondary](https://developers.cloudflare.com/dns/zone-setups/zone-transfers/cloudflare-as-secondary/setup/#dnssec)
   * for details.
   */
  dnssec_presigned?: boolean;

  /**
   * Full DS record.
   */
  ds?: string | null;

  /**
   * Flag for DNSSEC record.
   */
  flags?: number | null;

  /**
   * Code for key tag.
   */
  key_tag?: number | null;

  /**
   * Algorithm key type.
   */
  key_type?: string | null;

  /**
   * When DNSSEC was last modified.
   */
  modified_on?: string | null;

  /**
   * Public key for DS record.
   */
  public_key?: string | null;

  /**
   * Status of DNSSEC, based on user-desired state and presence of necessary records.
   */
  status?: 'active' | 'pending' | 'disabled' | 'pending-disabled' | 'error';
}

export interface DNSSECEditParams {
  /**
   * If true, multi-signer DNSSEC is enabled on the zone, allowing multiple providers
   * to serve a DNSSEC-signed zone at the same time. This is required for DNSKEY
   * records (except those automatically generated by Cloudflare) to be added to the
   * zone.
   *
   * See
   * [Multi-signer DNSSEC](https://developers.cloudflare.com/dns/dnssec/multi-signer-dnssec/)
   * for details.
   */
  dnssec_multi_signer?: boolean;

  /**
   * If true, allows Cloudflare to transfer in a DNSSEC-signed zone including
   * signatures from an external provider, without requiring Cloudflare to sign any
   * records on the fly.
   *
   * Note that this feature has some limitations. See
   * [Cloudflare as Secondary](https://developers.cloudflare.com/dns/zone-setups/zone-transfers/cloudflare-as-secondary/setup/#dnssec)
   * for details.
   */
  dnssec_presigned?: boolean;

  /**
   * Status of DNSSEC, based on user-desired state and presence of necessary records.
   */
  status?: 'active' | 'disabled';
}

export namespace DNSSEC {
  export import DNSSECDeleteResponse = DNSSECAPI.DNSSECDeleteResponse;
  export import DNSSECEditResponse = DNSSECAPI.DNSSECEditResponse;
  export import DNSSECGetResponse = DNSSECAPI.DNSSECGetResponse;
  export import DNSSECEditParams = DNSSECAPI.DNSSECEditParams;
}
