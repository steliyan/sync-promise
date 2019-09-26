const mockAxios = require("axios");

const { awaitRequests, thenRequests } = require("../index");

test("async/await", () => {
  awaitRequests();

  mockAxios.mockResponse({ status: 200, data: { id: 42 } });
  mockAxios.mockResponse({ status: 200, data: { foo: "bar" } });
});

test("then", () => {
  thenRequests();

  mockAxios.mockResponse({ status: 200, data: { id: 42 } });
  mockAxios.mockResponse({ status: 200, data: { foo: "bar" } });
});
