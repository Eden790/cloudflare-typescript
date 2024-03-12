// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'dev@cloudflare.com',
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  userServiceKey: 'My User Service Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource imports', () => {
  // skipped: tests are disabled for the time being
  test.skip('dnsRecordsForAZoneImportDNSRecords: only required params', async () => {
    const responsePromise = cloudflare.dnsRecords.imports.dnsRecordsForAZoneImportDNSRecords(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { file: 'www.example.com. 300 IN  A 127.0.0.1' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('dnsRecordsForAZoneImportDNSRecords: required and optional params', async () => {
    const response = await cloudflare.dnsRecords.imports.dnsRecordsForAZoneImportDNSRecords(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { file: 'www.example.com. 300 IN  A 127.0.0.1', proxied: 'true' },
    );
  });
});