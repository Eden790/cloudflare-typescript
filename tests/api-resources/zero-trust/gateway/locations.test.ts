// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource locations', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.gateway.locations.create({
      account_id: '699d98642c564d2e855e9661899b7252',
      name: 'Austin Office Location',
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
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.gateway.locations.create({
      account_id: '699d98642c564d2e855e9661899b7252',
      name: 'Austin Office Location',
      client_default: false,
      ecs_support: false,
      networks: [{ network: '192.0.2.1/32' }, { network: '192.0.2.1/32' }, { network: '192.0.2.1/32' }],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.gateway.locations.update(
      'ed35569b41ce4d1facfe683550f54086',
      { account_id: '699d98642c564d2e855e9661899b7252', name: 'Austin Office Location' },
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
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.gateway.locations.update('ed35569b41ce4d1facfe683550f54086', {
      account_id: '699d98642c564d2e855e9661899b7252',
      name: 'Austin Office Location',
      client_default: false,
      ecs_support: false,
      networks: [{ network: '192.0.2.1/32' }, { network: '192.0.2.1/32' }, { network: '192.0.2.1/32' }],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.gateway.locations.list({
      account_id: '699d98642c564d2e855e9661899b7252',
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
  test.skip('list: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.gateway.locations.list({
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.gateway.locations.delete(
      'ed35569b41ce4d1facfe683550f54086',
      { account_id: '699d98642c564d2e855e9661899b7252' },
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
  test.skip('delete: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.gateway.locations.delete('ed35569b41ce4d1facfe683550f54086', {
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.gateway.locations.get('ed35569b41ce4d1facfe683550f54086', {
      account_id: '699d98642c564d2e855e9661899b7252',
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
  test.skip('get: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.gateway.locations.get('ed35569b41ce4d1facfe683550f54086', {
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });
});
