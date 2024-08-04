/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "identity.identity";
export interface User {
  did: string;
  hash: string;
  owner: string;
  creator: string;
}
function createBaseUser(): User {
  return {
    did: "",
    hash: "",
    owner: "",
    creator: "",
  };
}
export const User = {
  typeUrl: "/identity.identity.User",
  encode(message: User, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): User {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;
        case 2:
          message.hash = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): User {
    const obj = createBaseUser();
    if (isSet(object.did)) obj.did = String(object.did);
    if (isSet(object.hash)) obj.hash = String(object.hash);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.creator)) obj.creator = String(object.creator);
    return obj;
  },
  toJSON(message: User): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    message.hash !== undefined && (obj.hash = message.hash);
    message.owner !== undefined && (obj.owner = message.owner);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.did = object.did ?? "";
    message.hash = object.hash ?? "";
    message.owner = object.owner ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};
