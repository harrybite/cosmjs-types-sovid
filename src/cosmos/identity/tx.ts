/* eslint-disable */
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../helpers";
export const protobufPackage = "identity.identity";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgCreateUser {
  creator: string;
  did: string;
  hash: string;
  owner: string;
}
export interface MsgCreateUserResponse {}
export interface MsgUpdateUser {
  creator: string;
  did: string;
  hash: string;
  owner: string;
}
export interface MsgUpdateUserResponse {}
export interface MsgDeleteUser {
  creator: string;
  did: string;
}
export interface MsgDeleteUserResponse {}
export interface MsgCreateAddress {
  creator: string;
  owner: string;
}
export interface MsgCreateAddressResponse {}
export interface MsgUpdateAddress {
  creator: string;
  owner: string;
}
export interface MsgUpdateAddressResponse {}
export interface MsgDeleteAddress {
  creator: string;
  owner: string;
}
export interface MsgDeleteAddressResponse {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  typeUrl: "/identity.identity.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    const obj = createBaseMsgUpdateParams();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/identity.identity.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    const obj = createBaseMsgUpdateParamsResponse();
    return obj;
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};
function createBaseMsgCreateUser(): MsgCreateUser {
  return {
    creator: "",
    did: "",
    hash: "",
    owner: "",
  };
}
export const MsgCreateUser = {
  typeUrl: "/identity.identity.MsgCreateUser",
  encode(message: MsgCreateUser, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    if (message.hash !== "") {
      writer.uint32(26).string(message.hash);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateUser {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.did = reader.string();
          break;
        case 3:
          message.hash = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateUser {
    const obj = createBaseMsgCreateUser();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.did)) obj.did = String(object.did);
    if (isSet(object.hash)) obj.hash = String(object.hash);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: MsgCreateUser): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.did !== undefined && (obj.did = message.did);
    message.hash !== undefined && (obj.hash = message.hash);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateUser>, I>>(object: I): MsgCreateUser {
    const message = createBaseMsgCreateUser();
    message.creator = object.creator ?? "";
    message.did = object.did ?? "";
    message.hash = object.hash ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseMsgCreateUserResponse(): MsgCreateUserResponse {
  return {};
}
export const MsgCreateUserResponse = {
  typeUrl: "/identity.identity.MsgCreateUserResponse",
  encode(_: MsgCreateUserResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateUserResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCreateUserResponse {
    const obj = createBaseMsgCreateUserResponse();
    return obj;
  },
  toJSON(_: MsgCreateUserResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateUserResponse>, I>>(_: I): MsgCreateUserResponse {
    const message = createBaseMsgCreateUserResponse();
    return message;
  },
};
function createBaseMsgUpdateUser(): MsgUpdateUser {
  return {
    creator: "",
    did: "",
    hash: "",
    owner: "",
  };
}
export const MsgUpdateUser = {
  typeUrl: "/identity.identity.MsgUpdateUser",
  encode(message: MsgUpdateUser, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    if (message.hash !== "") {
      writer.uint32(26).string(message.hash);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateUser {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.did = reader.string();
          break;
        case 3:
          message.hash = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateUser {
    const obj = createBaseMsgUpdateUser();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.did)) obj.did = String(object.did);
    if (isSet(object.hash)) obj.hash = String(object.hash);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: MsgUpdateUser): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.did !== undefined && (obj.did = message.did);
    message.hash !== undefined && (obj.hash = message.hash);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateUser>, I>>(object: I): MsgUpdateUser {
    const message = createBaseMsgUpdateUser();
    message.creator = object.creator ?? "";
    message.did = object.did ?? "";
    message.hash = object.hash ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseMsgUpdateUserResponse(): MsgUpdateUserResponse {
  return {};
}
export const MsgUpdateUserResponse = {
  typeUrl: "/identity.identity.MsgUpdateUserResponse",
  encode(_: MsgUpdateUserResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateUserResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateUserResponse {
    const obj = createBaseMsgUpdateUserResponse();
    return obj;
  },
  toJSON(_: MsgUpdateUserResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateUserResponse>, I>>(_: I): MsgUpdateUserResponse {
    const message = createBaseMsgUpdateUserResponse();
    return message;
  },
};
function createBaseMsgDeleteUser(): MsgDeleteUser {
  return {
    creator: "",
    did: "",
  };
}
export const MsgDeleteUser = {
  typeUrl: "/identity.identity.MsgDeleteUser",
  encode(message: MsgDeleteUser, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteUser {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.did = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeleteUser {
    const obj = createBaseMsgDeleteUser();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.did)) obj.did = String(object.did);
    return obj;
  },
  toJSON(message: MsgDeleteUser): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.did !== undefined && (obj.did = message.did);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteUser>, I>>(object: I): MsgDeleteUser {
    const message = createBaseMsgDeleteUser();
    message.creator = object.creator ?? "";
    message.did = object.did ?? "";
    return message;
  },
};
function createBaseMsgDeleteUserResponse(): MsgDeleteUserResponse {
  return {};
}
export const MsgDeleteUserResponse = {
  typeUrl: "/identity.identity.MsgDeleteUserResponse",
  encode(_: MsgDeleteUserResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteUserResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDeleteUserResponse {
    const obj = createBaseMsgDeleteUserResponse();
    return obj;
  },
  toJSON(_: MsgDeleteUserResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteUserResponse>, I>>(_: I): MsgDeleteUserResponse {
    const message = createBaseMsgDeleteUserResponse();
    return message;
  },
};
function createBaseMsgCreateAddress(): MsgCreateAddress {
  return {
    creator: "",
    owner: "",
  };
}
export const MsgCreateAddress = {
  typeUrl: "/identity.identity.MsgCreateAddress",
  encode(message: MsgCreateAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateAddress {
    const obj = createBaseMsgCreateAddress();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: MsgCreateAddress): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateAddress>, I>>(object: I): MsgCreateAddress {
    const message = createBaseMsgCreateAddress();
    message.creator = object.creator ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseMsgCreateAddressResponse(): MsgCreateAddressResponse {
  return {};
}
export const MsgCreateAddressResponse = {
  typeUrl: "/identity.identity.MsgCreateAddressResponse",
  encode(_: MsgCreateAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCreateAddressResponse {
    const obj = createBaseMsgCreateAddressResponse();
    return obj;
  },
  toJSON(_: MsgCreateAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateAddressResponse>, I>>(_: I): MsgCreateAddressResponse {
    const message = createBaseMsgCreateAddressResponse();
    return message;
  },
};
function createBaseMsgUpdateAddress(): MsgUpdateAddress {
  return {
    creator: "",
    owner: "",
  };
}
export const MsgUpdateAddress = {
  typeUrl: "/identity.identity.MsgUpdateAddress",
  encode(message: MsgUpdateAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateAddress {
    const obj = createBaseMsgUpdateAddress();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: MsgUpdateAddress): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateAddress>, I>>(object: I): MsgUpdateAddress {
    const message = createBaseMsgUpdateAddress();
    message.creator = object.creator ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseMsgUpdateAddressResponse(): MsgUpdateAddressResponse {
  return {};
}
export const MsgUpdateAddressResponse = {
  typeUrl: "/identity.identity.MsgUpdateAddressResponse",
  encode(_: MsgUpdateAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateAddressResponse {
    const obj = createBaseMsgUpdateAddressResponse();
    return obj;
  },
  toJSON(_: MsgUpdateAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateAddressResponse>, I>>(_: I): MsgUpdateAddressResponse {
    const message = createBaseMsgUpdateAddressResponse();
    return message;
  },
};
function createBaseMsgDeleteAddress(): MsgDeleteAddress {
  return {
    creator: "",
    owner: "",
  };
}
export const MsgDeleteAddress = {
  typeUrl: "/identity.identity.MsgDeleteAddress",
  encode(message: MsgDeleteAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeleteAddress {
    const obj = createBaseMsgDeleteAddress();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: MsgDeleteAddress): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteAddress>, I>>(object: I): MsgDeleteAddress {
    const message = createBaseMsgDeleteAddress();
    message.creator = object.creator ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseMsgDeleteAddressResponse(): MsgDeleteAddressResponse {
  return {};
}
export const MsgDeleteAddressResponse = {
  typeUrl: "/identity.identity.MsgDeleteAddressResponse",
  encode(_: MsgDeleteAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDeleteAddressResponse {
    const obj = createBaseMsgDeleteAddressResponse();
    return obj;
  },
  toJSON(_: MsgDeleteAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteAddressResponse>, I>>(_: I): MsgDeleteAddressResponse {
    const message = createBaseMsgDeleteAddressResponse();
    return message;
  },
};
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  CreateUser(request: MsgCreateUser): Promise<MsgCreateUserResponse>;
  UpdateUser(request: MsgUpdateUser): Promise<MsgUpdateUserResponse>;
  DeleteUser(request: MsgDeleteUser): Promise<MsgDeleteUserResponse>;
  CreateAddress(request: MsgCreateAddress): Promise<MsgCreateAddressResponse>;
  UpdateAddress(request: MsgUpdateAddress): Promise<MsgUpdateAddressResponse>;
  DeleteAddress(request: MsgDeleteAddress): Promise<MsgDeleteAddressResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.CreateUser = this.CreateUser.bind(this);
    this.UpdateUser = this.UpdateUser.bind(this);
    this.DeleteUser = this.DeleteUser.bind(this);
    this.CreateAddress = this.CreateAddress.bind(this);
    this.UpdateAddress = this.UpdateAddress.bind(this);
    this.DeleteAddress = this.DeleteAddress.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("identity.identity.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  CreateUser(request: MsgCreateUser): Promise<MsgCreateUserResponse> {
    const data = MsgCreateUser.encode(request).finish();
    const promise = this.rpc.request("identity.identity.Msg", "CreateUser", data);
    return promise.then((data) => MsgCreateUserResponse.decode(new BinaryReader(data)));
  }
  UpdateUser(request: MsgUpdateUser): Promise<MsgUpdateUserResponse> {
    const data = MsgUpdateUser.encode(request).finish();
    const promise = this.rpc.request("identity.identity.Msg", "UpdateUser", data);
    return promise.then((data) => MsgUpdateUserResponse.decode(new BinaryReader(data)));
  }
  DeleteUser(request: MsgDeleteUser): Promise<MsgDeleteUserResponse> {
    const data = MsgDeleteUser.encode(request).finish();
    const promise = this.rpc.request("identity.identity.Msg", "DeleteUser", data);
    return promise.then((data) => MsgDeleteUserResponse.decode(new BinaryReader(data)));
  }
  CreateAddress(request: MsgCreateAddress): Promise<MsgCreateAddressResponse> {
    const data = MsgCreateAddress.encode(request).finish();
    const promise = this.rpc.request("identity.identity.Msg", "CreateAddress", data);
    return promise.then((data) => MsgCreateAddressResponse.decode(new BinaryReader(data)));
  }
  UpdateAddress(request: MsgUpdateAddress): Promise<MsgUpdateAddressResponse> {
    const data = MsgUpdateAddress.encode(request).finish();
    const promise = this.rpc.request("identity.identity.Msg", "UpdateAddress", data);
    return promise.then((data) => MsgUpdateAddressResponse.decode(new BinaryReader(data)));
  }
  DeleteAddress(request: MsgDeleteAddress): Promise<MsgDeleteAddressResponse> {
    const data = MsgDeleteAddress.encode(request).finish();
    const promise = this.rpc.request("identity.identity.Msg", "DeleteAddress", data);
    return promise.then((data) => MsgDeleteAddressResponse.decode(new BinaryReader(data)));
  }
}
