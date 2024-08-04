/* eslint-disable */
import { Params } from "./params";
import { User } from "./user";
import { Address } from "./address";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "identity.identity";
/** GenesisState defines the identity module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  userList: User[];
  addressList: Address[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    userList: [],
    addressList: [],
  };
}
export const GenesisState = {
  typeUrl: "/identity.identity.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.userList) {
      User.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.addressList) {
      Address.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.userList.push(User.decode(reader, reader.uint32()));
          break;
        case 3:
          message.addressList.push(Address.decode(reader, reader.uint32()));
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
    if (Array.isArray(object?.userList)) obj.userList = object.userList.map((e: any) => User.fromJSON(e));
    if (Array.isArray(object?.addressList))
      obj.addressList = object.addressList.map((e: any) => Address.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.userList) {
      obj.userList = message.userList.map((e) => (e ? User.toJSON(e) : undefined));
    } else {
      obj.userList = [];
    }
    if (message.addressList) {
      obj.addressList = message.addressList.map((e) => (e ? Address.toJSON(e) : undefined));
    } else {
      obj.addressList = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.userList = object.userList?.map((e) => User.fromPartial(e)) || [];
    message.addressList = object.addressList?.map((e) => Address.fromPartial(e)) || [];
    return message;
  },
};
