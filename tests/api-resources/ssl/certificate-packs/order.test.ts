// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource order', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.ssl.certificatePacks.order.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      certificate_authority: 'lets_encrypt',
      hosts: ['example.com', '*.example.com', 'www.example.com'],
      type: 'advanced',
      validation_method: 'txt',
      validity_days: 14,
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
    const response = await cloudflare.ssl.certificatePacks.order.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      certificate_authority: 'lets_encrypt',
      hosts: ['example.com', '*.example.com', 'www.example.com'],
      type: 'advanced',
      validation_method: 'txt',
      validity_days: 14,
      cloudflare_branding: false,
    });
  });
});