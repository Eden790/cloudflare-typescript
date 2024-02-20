// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ACLsAPI from 'cloudflare/resources/secondary-dns/acls';
import * as ForceAxfrsAPI from 'cloudflare/resources/secondary-dns/force-axfrs';
import * as IncomingAPI from 'cloudflare/resources/secondary-dns/incoming';
import * as PeersAPI from 'cloudflare/resources/secondary-dns/peers';
import * as TsigsAPI from 'cloudflare/resources/secondary-dns/tsigs';
import * as OutgoingAPI from 'cloudflare/resources/secondary-dns/outgoing/outgoing';

export class SecondaryDNS extends APIResource {
  forceAxfrs: ForceAxfrsAPI.ForceAxfrs = new ForceAxfrsAPI.ForceAxfrs(this._client);
  incoming: IncomingAPI.Incoming = new IncomingAPI.Incoming(this._client);
  outgoing: OutgoingAPI.Outgoing = new OutgoingAPI.Outgoing(this._client);
  acls: ACLsAPI.ACLs = new ACLsAPI.ACLs(this._client);
  peers: PeersAPI.Peers = new PeersAPI.Peers(this._client);
  tsigs: TsigsAPI.Tsigs = new TsigsAPI.Tsigs(this._client);
}

export namespace SecondaryDNS {
  export import ForceAxfrs = ForceAxfrsAPI.ForceAxfrs;
  export import ForceAxfrCreateResponse = ForceAxfrsAPI.ForceAxfrCreateResponse;
  export import Incoming = IncomingAPI.Incoming;
  export import IncomingCreateResponse = IncomingAPI.IncomingCreateResponse;
  export import IncomingUpdateResponse = IncomingAPI.IncomingUpdateResponse;
  export import IncomingDeleteResponse = IncomingAPI.IncomingDeleteResponse;
  export import IncomingGetResponse = IncomingAPI.IncomingGetResponse;
  export import IncomingCreateParams = IncomingAPI.IncomingCreateParams;
  export import IncomingUpdateParams = IncomingAPI.IncomingUpdateParams;
  export import Outgoing = OutgoingAPI.Outgoing;
  export import OutgoingCreateResponse = OutgoingAPI.OutgoingCreateResponse;
  export import OutgoingUpdateResponse = OutgoingAPI.OutgoingUpdateResponse;
  export import OutgoingDeleteResponse = OutgoingAPI.OutgoingDeleteResponse;
  export import OutgoingDisableResponse = OutgoingAPI.OutgoingDisableResponse;
  export import OutgoingEnableResponse = OutgoingAPI.OutgoingEnableResponse;
  export import OutgoingForceNotifyResponse = OutgoingAPI.OutgoingForceNotifyResponse;
  export import OutgoingGetResponse = OutgoingAPI.OutgoingGetResponse;
  export import OutgoingCreateParams = OutgoingAPI.OutgoingCreateParams;
  export import OutgoingUpdateParams = OutgoingAPI.OutgoingUpdateParams;
  export import ACLs = ACLsAPI.ACLs;
  export import ACLCreateResponse = ACLsAPI.ACLCreateResponse;
  export import ACLUpdateResponse = ACLsAPI.ACLUpdateResponse;
  export import ACLListResponse = ACLsAPI.ACLListResponse;
  export import ACLDeleteResponse = ACLsAPI.ACLDeleteResponse;
  export import ACLGetResponse = ACLsAPI.ACLGetResponse;
  export import ACLCreateParams = ACLsAPI.ACLCreateParams;
  export import ACLUpdateParams = ACLsAPI.ACLUpdateParams;
  export import Peers = PeersAPI.Peers;
  export import PeerCreateResponse = PeersAPI.PeerCreateResponse;
  export import PeerUpdateResponse = PeersAPI.PeerUpdateResponse;
  export import PeerListResponse = PeersAPI.PeerListResponse;
  export import PeerDeleteResponse = PeersAPI.PeerDeleteResponse;
  export import PeerGetResponse = PeersAPI.PeerGetResponse;
  export import PeerCreateParams = PeersAPI.PeerCreateParams;
  export import PeerUpdateParams = PeersAPI.PeerUpdateParams;
  export import Tsigs = TsigsAPI.Tsigs;
  export import TsigCreateResponse = TsigsAPI.TsigCreateResponse;
  export import TsigUpdateResponse = TsigsAPI.TsigUpdateResponse;
  export import TsigListResponse = TsigsAPI.TsigListResponse;
  export import TsigDeleteResponse = TsigsAPI.TsigDeleteResponse;
  export import TsigGetResponse = TsigsAPI.TsigGetResponse;
  export import TsigCreateParams = TsigsAPI.TsigCreateParams;
  export import TsigUpdateParams = TsigsAPI.TsigUpdateParams;
}
