/* eslint-disable */
import { Params } from "./params";
import { Denom } from "./denom";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "tokenfactory.tokenfactory";
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  denomList: Denom[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    denomList: [],
  };
}
export const GenesisState = {
  typeUrl: "/tokenfactory.tokenfactory.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.denomList) {
      Denom.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.denomList.push(Denom.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (Array.isArray(object?.denomList)) obj.denomList = object.denomList.map((e: any) => Denom.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.denomList) {
      obj.denomList = message.denomList.map((e) => (e ? Denom.toJSON(e) : undefined));
    } else {
      obj.denomList = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.denomList = object.denomList?.map((e) => Denom.fromPartial(e)) || [];
    return message;
  },
};
