import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { MockInstance, vi } from 'vitest';
import { axiosPokemonInstance } from '../constants';
import { AxiosPokemon } from './axios-pokemon';

describe(`AxiosRed`, (): void => {
  let url: string;
  let config: AxiosRequestConfig;
  let responseData: Record<string, unknown>;
  let axiosResponse: AxiosResponse<Record<string, unknown>>;
  let axiosError: Error;

  beforeEach((): void => {
    url = `http://site.dummy`;
    responseData = { foo: `bar` };
    axiosResponse = { data: responseData } as AxiosResponse<Record<string, unknown>>;
    axiosError = new Error(`axios error`);
  });

  describe(`get()`, (): void => {
    let spyOnAxiosGet: MockInstance;

    beforeEach((): void => {
      spyOnAxiosGet = vi.spyOn(axiosPokemonInstance, `get`).mockResolvedValue(axiosResponse);
    });

    it(`should call axios only one time with config`, async (): Promise<void> => {
      expect.assertions(2);

      await AxiosPokemon.get(url, config);

      expect(axiosPokemonInstance.get).toHaveBeenCalledOnce();
      expect(axiosPokemonInstance.get).toHaveBeenCalledWith(url, config);
    });

    describe(`when the value is successfully fetched`, (): void => {
      it(`should return the response`, async (): Promise<void> => {
        expect.assertions(1);

        const result = await AxiosPokemon.get(url, config);

        expect(result.data).toStrictEqual(responseData);
      });
    });

    describe(`when the value failed to be fetched`, (): void => {
      beforeEach((): void => {
        spyOnAxiosGet.mockRejectedValue(axiosError);
      });

      it(`should return an error`, async (): Promise<void> => {
        expect.assertions(1);

        await expect(AxiosPokemon.get(url, config)).rejects.toThrow(axiosError);
      });
    });
  });

  describe(`post()`, (): void => {
    let spyOnAxiosPost: MockInstance;
    let data: Record<string, unknown>;

    beforeEach((): void => {
      spyOnAxiosPost = vi.spyOn(axiosPokemonInstance, `post`).mockResolvedValue(axiosResponse);
      data = { baz: `qux` };
    });

    it(`should call axios only one time with config`, async (): Promise<void> => {
      expect.assertions(2);

      await AxiosPokemon.post(url, data, config);

      expect(axiosPokemonInstance.post).toHaveBeenCalledOnce();
      expect(axiosPokemonInstance.post).toHaveBeenCalledWith(url, data, config);
    });

    describe(`when the data is successfully posted`, (): void => {
      it(`should return the response`, async (): Promise<void> => {
        expect.assertions(1);

        const result = await AxiosPokemon.post(url, data, config);

        expect(result.data).toStrictEqual(responseData);
      });
    });

    describe(`when the data failed to be posted`, (): void => {
      beforeEach((): void => {
        spyOnAxiosPost.mockRejectedValue(axiosError);
      });

      it(`should return an error`, async (): Promise<void> => {
        expect.assertions(1);

        await expect(AxiosPokemon.post(url, data, config)).rejects.toThrow(axiosError);
      });
    });
  });

  describe(`patch()`, (): void => {
    let spyOnAxiosPatch: MockInstance;
    let data: Record<string, unknown>;

    beforeEach((): void => {
      spyOnAxiosPatch = vi.spyOn(axiosPokemonInstance, `patch`).mockResolvedValue(axiosResponse);
      data = { baz: `qux` };
    });

    it(`should call axios only one time with config`, async (): Promise<void> => {
      expect.assertions(2);

      await AxiosPokemon.patch(url, data, config);

      expect(axiosPokemonInstance.patch).toHaveBeenCalledOnce();
      expect(axiosPokemonInstance.patch).toHaveBeenCalledWith(url, data, config);
    });

    describe(`when the data is successfully patched`, (): void => {
      it(`should return the response`, async (): Promise<void> => {
        expect.assertions(1);

        const result = await AxiosPokemon.patch(url, data, config);

        expect(result.data).toStrictEqual(responseData);
      });
    });

    describe(`when the data failed to be patched`, (): void => {
      beforeEach((): void => {
        spyOnAxiosPatch.mockRejectedValue(axiosError);
      });

      it(`should return an error`, async (): Promise<void> => {
        expect.assertions(1);

        await expect(AxiosPokemon.patch(url, data, config)).rejects.toThrow(axiosError);
      });
    });
  });

  describe(`put()`, (): void => {
    let spyOnAxiosPut: MockInstance;
    let data: Record<string, unknown>;

    beforeEach((): void => {
      spyOnAxiosPut = vi.spyOn(axiosPokemonInstance, `put`).mockResolvedValue(axiosResponse);
      data = { baz: `qux` };
    });

    it(`should call axios only one time with config`, async (): Promise<void> => {
      expect.assertions(2);

      await AxiosPokemon.put(url, data, config);

      expect(axiosPokemonInstance.put).toHaveBeenCalledOnce();
      expect(axiosPokemonInstance.put).toHaveBeenCalledWith(url, data, config);
    });

    describe(`when the data is successfully put`, (): void => {
      it(`should return the response`, async (): Promise<void> => {
        expect.assertions(1);

        const result = await AxiosPokemon.put(url, data, config);

        expect(result.data).toStrictEqual(responseData);
      });
    });

    describe(`when the data failed to be put`, (): void => {
      beforeEach((): void => {
        spyOnAxiosPut.mockRejectedValue(axiosError);
      });

      it(`should return an error`, async (): Promise<void> => {
        expect.assertions(1);

        await expect(AxiosPokemon.put(url, data, config)).rejects.toThrow(axiosError);
      });
    });
  });

  describe(`delete()`, (): void => {
    let spyOnDelete: MockInstance;

    beforeEach((): void => {
      spyOnDelete = vi.spyOn(axiosPokemonInstance, `delete`).mockResolvedValue(axiosResponse);
    });

    it(`should call axios only one time`, async (): Promise<void> => {
      expect.assertions(2);

      await AxiosPokemon.delete(url, config);

      expect(axiosPokemonInstance.delete).toHaveBeenCalledOnce();
      expect(axiosPokemonInstance.delete).toHaveBeenCalledWith(url, config);
    });

    describe(`when the data is successfully deleted`, (): void => {
      it(`should return the response`, async (): Promise<void> => {
        expect.assertions(1);

        const result = await AxiosPokemon.delete(url, config);

        expect(result.data).toStrictEqual(responseData);
      });
    });

    describe(`when the data failed to be deleted`, (): void => {
      beforeEach((): void => {
        spyOnDelete.mockRejectedValue(axiosError);
      });

      it(`should return an error `, async (): Promise<void> => {
        expect.assertions(1);

        await expect(AxiosPokemon.delete(url, config)).rejects.toThrow(axiosError);
      });
    });
  });
});
