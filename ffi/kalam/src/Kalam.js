import { kalamLibPath } from '../../../app/utils/binaries';
import { log } from '../../../app/utils/log';
import { undefinedOrNull } from '../../../app/utils/funcs';
import { checkIf } from '../../../app/utils/checkIf';

const ffi = require('ffi-napi');

export class Kalam {
  constructor() {
    this.libPath = kalamLibPath;

    this.lib = ffi.Library(this.libPath, {
      Initialize: ['void', ['pointer']],
      FetchDeviceInfo: ['void', ['pointer']],
      FetchStorages: ['void', ['pointer']],
      MakeDirectory: ['void', ['pointer', 'string']],
      FileExists: ['void', ['pointer', 'string']],
      DeleteFile: ['void', ['pointer', 'string']],
      RenameFile: ['void', ['pointer', 'string']],
      Walk: ['void', ['pointer', 'string']],
      UploadFiles: ['void', ['pointer', 'pointer', 'pointer', 'string']],
      // DownloadFiles: ['void', ['string', 'string', 'pointer']],
      Dispose: ['void', ['pointer']],
    });
  }

  _getNapiError(error) {
    return {
      error,
      stderr: null,
      data: null,
    };
  }

  _getData(value) {
    return {
      error: value?.error === '' ? null : value?.error,
      stderr: value?.errorType === '' ? null : value?.errorType,
      data: value?.data,
    };
  }

  async InitializeMtp() {
    return new Promise((resolve) => {
      try {
        const onDone = ffi.Callback('void', ['string'], (result) => {
          const json = JSON.parse(result);

          console.log('InitializeMtp: ', json);

          return resolve(this._getData(json));
        });

        this.lib.Initialize.async(onDone, (err, _) => {
          if (!undefinedOrNull(err)) {
            log.error(err, 'Kalam.Initialize.async');

            return resolve(this._getNapiError(err));
          }
        });
      } catch (err) {
        log.error(err, 'Kalam.Initialize.catch');

        return resolve(this._getNapiError(err));
      }
    });
  }

  async FetchDeviceInfo() {
    return new Promise((resolve) => {
      try {
        const onDone = ffi.Callback('void', ['string'], (result) => {
          const json = JSON.parse(result);

          console.log('FetchDeviceInfo: ', json);

          return resolve(this._getData(json));
        });

        this.lib.FetchDeviceInfo.async(onDone, (err, _) => {
          if (!undefinedOrNull(err)) {
            log.error(err, 'Kalam.FetchDeviceInfo.async');

            return resolve(this._getNapiError(err));
          }
        });
      } catch (err) {
        log.error(err, 'Kalam.FetchDeviceInfo.catch');

        return resolve(this._getNapiError(err));
      }
    });
  }

  async FetchStorages() {
    return new Promise((resolve) => {
      try {
        const onDone = ffi.Callback('void', ['string'], (result) => {
          const json = JSON.parse(result);

          console.log('FetchStorages: ', json);

          return resolve(this._getData(json));
        });

        this.lib.FetchStorages.async(onDone, (err, _) => {
          if (!undefinedOrNull(err)) {
            log.error(err, 'Kalam.FetchStorages.async');

            return resolve(this._getNapiError(err));
          }
        });
      } catch (err) {
        log.error(err, 'Kalam.FetchStorages.catch');

        return resolve(this._getNapiError(err));
      }
    });
  }

  async MakeDirectory({ storageId, fullPath }) {
    checkIf(storageId, 'numericString');
    checkIf(fullPath, 'string');

    return new Promise((resolve) => {
      try {
        const onDone = ffi.Callback('void', ['string'], (result) => {
          const json = JSON.parse(result);

          console.log('MakeDirectory: ', json);

          return resolve(this._getData(json));
        });

        const _storageId = parseInt(storageId, 10);

        const args = { storageId: _storageId, fullPath };
        const json = JSON.stringify(args);

        this.lib.MakeDirectory.async(onDone, json, (err, _) => {
          if (!undefinedOrNull(err)) {
            log.error(err, 'Kalam.MakeDirectory.async');

            return resolve(this._getNapiError(err));
          }
        });
      } catch (err) {
        log.error(err, 'Kalam.MakeDirectory.catch');

        return resolve(this._getNapiError(err));
      }
    });
  }

  async FileExists({ storageId, files }) {
    checkIf(storageId, 'numericString');
    checkIf(files, 'array');

    return new Promise((resolve) => {
      try {
        const onDone = ffi.Callback('void', ['string'], (result) => {
          const json = JSON.parse(result);

          console.log('FileExists: ', json);

          return resolve(this._getData(json));
        });

        const _storageId = parseInt(storageId, 10);

        const args = { storageId: _storageId, files };
        const json = JSON.stringify(args);

        this.lib.FileExists.async(onDone, json, (err, _) => {
          if (!undefinedOrNull(err)) {
            log.error(err, 'Kalam.FileExists.async');

            return resolve(this._getNapiError(err));
          }
        });
      } catch (err) {
        log.error(err, 'Kalam.FileExists.catch');

        return resolve(this._getNapiError(err));
      }
    });
  }

  async DeleteFile({ storageId, files }) {
    checkIf(storageId, 'numericString');
    checkIf(files, 'array');

    return new Promise((resolve) => {
      try {
        const onDone = ffi.Callback('void', ['string'], (result) => {
          const json = JSON.parse(result);

          console.log('DeleteFile: ', json);

          return resolve(this._getData(json));
        });

        const _storageId = parseInt(storageId, 10);

        const args = { storageId: _storageId, files };
        const json = JSON.stringify(args);

        this.lib.DeleteFile.async(onDone, json, (err, _) => {
          if (!undefinedOrNull(err)) {
            log.error(err, 'Kalam.DeleteFile.async');

            return resolve(this._getNapiError(err));
          }
        });
      } catch (err) {
        log.error(err, 'Kalam.DeleteFile.catch');

        return resolve(this._getNapiError(err));
      }
    });
  }

  async RenameFile({ storageId, fullPath, newFileName }) {
    checkIf(storageId, 'numericString');
    checkIf(fullPath, 'string');
    checkIf(newFileName, 'string');

    return new Promise((resolve) => {
      try {
        const onDone = ffi.Callback('void', ['string'], (result) => {
          const json = JSON.parse(result);

          console.log('RenameFile: ', json);

          return resolve(this._getData(json));
        });

        const _storageId = parseInt(storageId, 10);

        const args = { storageId: _storageId, fullPath, newFileName };
        const json = JSON.stringify(args);

        this.lib.RenameFile.async(onDone, json, (err, _) => {
          if (!undefinedOrNull(err)) {
            log.error(err, 'Kalam.RenameFile.async');

            return resolve(this._getNapiError(err));
          }
        });
      } catch (err) {
        log.error(err, 'Kalam.RenameFile.catch');

        return resolve(this._getNapiError(err));
      }
    });
  }

  async Walk({ storageId, fullPath }) {
    checkIf(storageId, 'numericString');

    return new Promise((resolve) => {
      try {
        const onDone = ffi.Callback('void', ['string'], (result) => {
          const json = JSON.parse(result);

          console.log('Walk: ', json);

          return resolve(this._getData(json));
        });

        const _storageId = parseInt(storageId, 10);

        const args = {
          storageId: _storageId,
          fullPath,
          recursive: false,
          skipDisallowedFiles: false,
        };
        const json = JSON.stringify(args);

        this.lib.Walk.async(onDone, json, (err, _) => {
          if (!undefinedOrNull(err)) {
            log.error(err, 'Kalam.Walk.async');

            return resolve(this._getNapiError(err));
          }
        });
      } catch (err) {
        log.error(err, 'Kalam.Walk.catch');

        return resolve(this._getNapiError(err));
      }
    });
  }

  async UploadFiles({ storageId, sources, destination, preprocessFiles }) {
    checkIf(storageId, 'numericString');
    checkIf(sources, 'array');
    checkIf(destination, 'string');
    checkIf(preprocessFiles, 'boolean');

    return new Promise((resolve) => {
      try {
        const onPreprocess = ffi.Callback('void', ['string'], (result) => {
          const json = JSON.parse(result);
          const err = this._getData(json);

          if (!undefinedOrNull(err.error)) {
            return resolve(err);
          }

          console.log('UploadFiles onPreprocess: ', json);
        });

        const onProgress = ffi.Callback('void', ['string'], (result) => {
          const json = JSON.parse(result);
          const err = this._getData(json);

          if (!undefinedOrNull(err.error)) {
            return resolve(err);
          }

          console.log('UploadFiles onProgress: ', json);
        });

        const onDone = ffi.Callback('void', ['string'], (result) => {
          const json = JSON.parse(result);

          console.log('UploadFiles onDone: ', json);

          return resolve(this._getData(json));
        });

        const _storageId = parseInt(storageId, 10);

        const args = {
          storageId: _storageId,
          sources,
          destination,
          preprocessFiles,
        };
        const json = JSON.stringify(args);

        this.lib.UploadFiles.async(
          onPreprocess,
          onProgress,
          onDone,
          json,
          (err, _) => {
            if (!undefinedOrNull(err)) {
              log.error(err, 'Kalam.UploadFiles.async');

              return resolve(this._getNapiError(err));
            }
          }
        );
      } catch (err) {
        log.error(err, 'Kalam.UploadFiles.catch');

        return resolve(this._getNapiError(err));
      }
    });
  }

  async Dispose() {
    return new Promise((resolve) => {
      try {
        const onDone = ffi.Callback('void', ['string'], (result) => {
          const json = JSON.parse(result);

          console.log('Dispose: ', json);

          return resolve(this._getData(json));
        });

        this.lib.Dispose.async(onDone, (err, _) => {
          if (!undefinedOrNull(err)) {
            log.error(err, 'Kalam.Dispose.async');

            return resolve(this._getNapiError(err));
          }
        });
      } catch (err) {
        log.error(err, 'Kalam.Dispose.catch');

        return resolve(this._getNapiError(err));
      }
    });
  }
}

const kalamFfi = new Kalam();

export default kalamFfi;
