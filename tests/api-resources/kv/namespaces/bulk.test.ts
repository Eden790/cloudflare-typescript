// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bulk', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.kv.namespaces.bulk.update('0f2ac74b498b48028cb68387c421e279', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [{}, {}, {}],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.kv.namespaces.bulk.update('0f2ac74b498b48028cb68387c421e279', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [
        {
          base64: true,
          expiration: 1578435000,
          expiration_ttl: 300,
          key: 'My-Key',
          metadata: { someMetadataKey: 'someMetadataValue' },
          value: 'Some string',
        },
        {
          base64: true,
          expiration: 1578435000,
          expiration_ttl: 300,
          key: 'My-Key',
          metadata: { someMetadataKey: 'someMetadataValue' },
          value: 'Some string',
        },
        {
          base64: true,
          expiration: 1578435000,
          expiration_ttl: 300,
          key: 'My-Key',
          metadata: { someMetadataKey: 'someMetadataValue' },
          value: 'Some string',
        },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.kv.namespaces.bulk.delete('0f2ac74b498b48028cb68387c421e279', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: ['My-Key', 'My-Key', 'My-Key'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await cloudflare.kv.namespaces.bulk.delete('0f2ac74b498b48028cb68387c421e279', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: ['My-Key', 'My-Key', 'My-Key'],
    });
  });
});
