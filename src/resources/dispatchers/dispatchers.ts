// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ScriptsAPI from 'cloudflare/resources/dispatchers/scripts';

export class Dispatchers extends APIResource {
  scripts: ScriptsAPI.Scripts = new ScriptsAPI.Scripts(this._client);
}

export namespace Dispatchers {
  export import Scripts = ScriptsAPI.Scripts;
  export import ScriptRetrieveResponse = ScriptsAPI.ScriptRetrieveResponse;
  export import ScriptUpdateResponse = ScriptsAPI.ScriptUpdateResponse;
  export import ScriptUpdateParams = ScriptsAPI.ScriptUpdateParams;
  export import ScriptDeleteParams = ScriptsAPI.ScriptDeleteParams;
}