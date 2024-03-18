// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ContentListsAPI from 'cloudflare/resources/web3/hostnames/ipfs-universal-paths/content-lists/content-lists';

export class IPFSUniversalPaths extends APIResource {
  contentLists: ContentListsAPI.ContentLists = new ContentListsAPI.ContentLists(this._client);
}

export namespace IPFSUniversalPaths {
  export import ContentLists = ContentListsAPI.ContentLists;
  export import DwebConfigContentListDetails = ContentListsAPI.DwebConfigContentListDetails;
  export import ContentListUpdateParams = ContentListsAPI.ContentListUpdateParams;
}