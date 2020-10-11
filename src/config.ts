import {
  GpioMapping,
  LedMatrix,
  MatrixOptions,
  RuntimeOptions,
} from "rpi-led-matrix";

export const matrixOptions: MatrixOptions = {
  ...LedMatrix.defaultMatrixOptions(),
  rows: 32,
  cols: 64,
  chainLength: 2,
  hardwareMapping: GpioMapping.Regular,
  parallel: 1,
  // pixelMapperConfig: LedMatrixUtils.encodeMappers(
  //   { type: PixelMapperType.Chainlink }
  // ),
  // pixelMapperConfig: LedMatrixUtils.encodeMappers({ type: PixelMapperType.U }),
};

export const runtimeOptions: RuntimeOptions = {
  ...LedMatrix.defaultRuntimeOptions(),
  gpioSlowdown: 4,
};
