/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "tokenfactory.tokenfactory";
export interface Denom {
  denom: string;
  ticker: string;
  precision: number;
  maxSupply: number;
  owner: string;
}
function createBaseDenom(): Denom {
  return {
    denom: "",
    ticker: "",
    precision: 0,
    maxSupply: 0,
    owner: "",
  };
}
export const Denom = {
  typeUrl: "/tokenfactory.tokenfactory.Denom",
  encode(message: Denom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.precision !== 0) {
      writer.uint32(24).int32(message.precision);
    }
    if (message.maxSupply !== 0) {
      writer.uint32(32).int32(message.maxSupply);
    }
    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Denom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.ticker = reader.string();
          break;
        case 3:
          message.precision = reader.int32();
          break;
        case 4:
          message.maxSupply = reader.int32();
          break;
        case 5:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Denom {
    const obj = createBaseDenom();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.ticker)) obj.ticker = String(object.ticker);
    if (isSet(object.precision)) obj.precision = Number(object.precision);
    if (isSet(object.maxSupply)) obj.maxSupply = Number(object.maxSupply);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: Denom): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.ticker !== undefined && (obj.ticker = message.ticker);
    message.precision !== undefined && (obj.precision = Math.round(message.precision));
    message.maxSupply !== undefined && (obj.maxSupply = Math.round(message.maxSupply));
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Denom>, I>>(object: I): Denom {
    const message = createBaseDenom();
    message.denom = object.denom ?? "";
    message.ticker = object.ticker ?? "";
    message.precision = object.precision ?? 0;
    message.maxSupply = object.maxSupply ?? 0;
    message.owner = object.owner ?? "";
    return message;
  },
};
