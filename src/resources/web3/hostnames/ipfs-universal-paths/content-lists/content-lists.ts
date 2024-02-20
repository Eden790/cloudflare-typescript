// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ContentListsAPI from 'cloudflare/resources/web3/hostnames/ipfs-universal-paths/content-lists/content-lists';
import * as EntriesAPI from 'cloudflare/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries';

export class ContentLists extends APIResource {
  entries: EntriesAPI.Entries = new EntriesAPI.Entries(this._client);

  /**
   * Update IPFS Universal Path Gateway Content List
   */
  update(
    zoneIdentifier: string,
    identifier: string,
    body: ContentListUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContentListUpdateResponse> {
    return (
      this._client.put(
        `/zones/${zoneIdentifier}/web3/hostnames/${identifier}/ipfs_universal_path/content_list`,
        { body, ...options },
      ) as Core.APIPromise<{ result: ContentListUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * IPFS Universal Path Gateway Content List Details
   */
  list(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContentListListResponse> {
    return (
      this._client.get(
        `/zones/${zoneIdentifier}/web3/hostnames/${identifier}/ipfs_universal_path/content_list`,
        options,
      ) as Core.APIPromise<{ result: ContentListListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ContentListUpdateResponse {
  /**
   * Behavior of the content list.
   */
  action?: 'block';
}

export interface ContentListListResponse {
  /**
   * Behavior of the content list.
   */
  action?: 'block';
}

export interface ContentListUpdateParams {
  /**
   * Behavior of the content list.
   */
  action: 'block';

  /**
   * Content list entries.
   */
  entries: Array<ContentListUpdateParams.Entry>;
}

export namespace ContentListUpdateParams {
  /**
   * Content list entry to be blocked.
   */
  export interface Entry {
    /**
     * CID or content path of content to block.
     */
    content?: string;

    /**
     * An optional description of the content list entry.
     */
    description?: string;

    /**
     * Type of content list entry to block.
     */
    type?: 'cid' | 'content_path';
  }
}

export namespace ContentLists {
  export import ContentListUpdateResponse = ContentListsAPI.ContentListUpdateResponse;
  export import ContentListListResponse = ContentListsAPI.ContentListListResponse;
  export import ContentListUpdateParams = ContentListsAPI.ContentListUpdateParams;
  export import Entries = EntriesAPI.Entries;
  export import EntryCreateResponse = EntriesAPI.EntryCreateResponse;
  export import EntryUpdateResponse = EntriesAPI.EntryUpdateResponse;
  export import EntryListResponse = EntriesAPI.EntryListResponse;
  export import EntryDeleteResponse = EntriesAPI.EntryDeleteResponse;
  export import EntryGetResponse = EntriesAPI.EntryGetResponse;
  export import EntryCreateParams = EntriesAPI.EntryCreateParams;
  export import EntryUpdateParams = EntriesAPI.EntryUpdateParams;
}
