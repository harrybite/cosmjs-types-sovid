/* eslint-disable */
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../helpers";
export const protobufPackage = "tokenfactory.tokenfactory";
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
export interface MsgCreateDenom {
  owner: string;
  denom: string;
  ticker: string;
  precision: number;
  maxSupply: number;
}
export interface MsgCreateDenomResponse {}
export interface MsgUpdateDenom {
  owner: string;
  denom: string;
  ticker: string;
  precision: number;
  maxSupply: number;
}
export interface MsgUpdateDenomResponse {}
export interface MsgDeleteDenom {
  owner: string;
  denom: string;
}
export interface MsgDeleteDenomResponse {}
export interface MsgUpdateOwner {
  owner: string;
  denom: string;
  newOwner: string;
}
export interface MsgUpdateOwnerResponse {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  typeUrl: "/tokenfactory.tokenfactory.MsgUpdateParams",
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
  typeUrl: "/tokenfactory.tokenfactory.MsgUpdateParamsResponse",
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
function createBaseMsgCreateDenom(): MsgCreateDenom {
  return {
    owner: "",
    denom: "",
    ticker: "",
    precision: 0,
    maxSupply: 0,
  };
}
export const MsgCreateDenom = {
  typeUrl: "/tokenfactory.tokenfactory.MsgCreateDenom",
  encode(message: MsgCreateDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.ticker !== "") {
      writer.uint32(26).string(message.ticker);
    }
    if (message.precision !== 0) {
      writer.uint32(32).int32(message.precision);
    }
    if (message.maxSupply !== 0) {
      writer.uint32(40).int32(message.maxSupply);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.ticker = reader.string();
          break;
        case 4:
          message.precision = reader.int32();
          break;
        case 5:
          message.maxSupply = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateDenom {
    const obj = createBaseMsgCreateDenom();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.ticker)) obj.ticker = String(object.ticker);
    if (isSet(object.precision)) obj.precision = Number(object.precision);
    if (isSet(object.maxSupply)) obj.maxSupply = Number(object.maxSupply);
    return obj;
  },
  toJSON(message: MsgCreateDenom): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.denom !== undefined && (obj.denom = message.denom);
    message.ticker !== undefined && (obj.ticker = message.ticker);
    message.precision !== undefined && (obj.precision = Math.round(message.precision));
    message.maxSupply !== undefined && (obj.maxSupply = Math.round(message.maxSupply));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateDenom>, I>>(object: I): MsgCreateDenom {
    const message = createBaseMsgCreateDenom();
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    message.ticker = object.ticker ?? "";
    message.precision = object.precision ?? 0;
    message.maxSupply = object.maxSupply ?? 0;
    return message;
  },
};
function createBaseMsgCreateDenomResponse(): MsgCreateDenomResponse {
  return {};
}
export const MsgCreateDenomResponse = {
  typeUrl: "/tokenfactory.tokenfactory.MsgCreateDenomResponse",
  encode(_: MsgCreateDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenomResponse();
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
  fromJSON(_: any): MsgCreateDenomResponse {
    const obj = createBaseMsgCreateDenomResponse();
    return obj;
  },
  toJSON(_: MsgCreateDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateDenomResponse>, I>>(_: I): MsgCreateDenomResponse {
    const message = createBaseMsgCreateDenomResponse();
    return message;
  },
};
function createBaseMsgUpdateDenom(): MsgUpdateDenom {
  return {
    owner: "",
    denom: "",
    ticker: "",
    precision: 0,
    maxSupply: 0,
  };
}
export const MsgUpdateDenom = {
  typeUrl: "/tokenfactory.tokenfactory.MsgUpdateDenom",
  encode(message: MsgUpdateDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.ticker !== "") {
      writer.uint32(26).string(message.ticker);
    }
    if (message.precision !== 0) {
      writer.uint32(32).int32(message.precision);
    }
    if (message.maxSupply !== 0) {
      writer.uint32(40).int32(message.maxSupply);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.ticker = reader.string();
          break;
        case 4:
          message.precision = reader.int32();
          break;
        case 5:
          message.maxSupply = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateDenom {
    const obj = createBaseMsgUpdateDenom();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.ticker)) obj.ticker = String(object.ticker);
    if (isSet(object.precision)) obj.precision = Number(object.precision);
    if (isSet(object.maxSupply)) obj.maxSupply = Number(object.maxSupply);
    return obj;
  },
  toJSON(message: MsgUpdateDenom): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.denom !== undefined && (obj.denom = message.denom);
    message.ticker !== undefined && (obj.ticker = message.ticker);
    message.precision !== undefined && (obj.precision = Math.round(message.precision));
    message.maxSupply !== undefined && (obj.maxSupply = Math.round(message.maxSupply));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateDenom>, I>>(object: I): MsgUpdateDenom {
    const message = createBaseMsgUpdateDenom();
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    message.ticker = object.ticker ?? "";
    message.precision = object.precision ?? 0;
    message.maxSupply = object.maxSupply ?? 0;
    return message;
  },
};
function createBaseMsgUpdateDenomResponse(): MsgUpdateDenomResponse {
  return {};
}
export const MsgUpdateDenomResponse = {
  typeUrl: "/tokenfactory.tokenfactory.MsgUpdateDenomResponse",
  encode(_: MsgUpdateDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDenomResponse();
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
  fromJSON(_: any): MsgUpdateDenomResponse {
    const obj = createBaseMsgUpdateDenomResponse();
    return obj;
  },
  toJSON(_: MsgUpdateDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateDenomResponse>, I>>(_: I): MsgUpdateDenomResponse {
    const message = createBaseMsgUpdateDenomResponse();
    return message;
  },
};
function createBaseMsgDeleteDenom(): MsgDeleteDenom {
  return {
    owner: "",
    denom: "",
  };
}
export const MsgDeleteDenom = {
  typeUrl: "/tokenfactory.tokenfactory.MsgDeleteDenom",
  encode(message: MsgDeleteDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeleteDenom {
    const obj = createBaseMsgDeleteDenom();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: MsgDeleteDenom): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteDenom>, I>>(object: I): MsgDeleteDenom {
    const message = createBaseMsgDeleteDenom();
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};
function createBaseMsgDeleteDenomResponse(): MsgDeleteDenomResponse {
  return {};
}
export const MsgDeleteDenomResponse = {
  typeUrl: "/tokenfactory.tokenfactory.MsgDeleteDenomResponse",
  encode(_: MsgDeleteDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteDenomResponse();
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
  fromJSON(_: any): MsgDeleteDenomResponse {
    const obj = createBaseMsgDeleteDenomResponse();
    return obj;
  },
  toJSON(_: MsgDeleteDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteDenomResponse>, I>>(_: I): MsgDeleteDenomResponse {
    const message = createBaseMsgDeleteDenomResponse();
    return message;
  },
};
function createBaseMsgUpdateOwner(): MsgUpdateOwner {
  return {
    owner: "",
    denom: "",
    newOwner: "",
  };
}
export const MsgUpdateOwner = {
  typeUrl: "/tokenfactory.tokenfactory.MsgUpdateOwner",
  encode(message: MsgUpdateOwner, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.newOwner !== "") {
      writer.uint32(26).string(message.newOwner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOwner {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.newOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateOwner {
    const obj = createBaseMsgUpdateOwner();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.newOwner)) obj.newOwner = String(object.newOwner);
    return obj;
  },
  toJSON(message: MsgUpdateOwner): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.denom !== undefined && (obj.denom = message.denom);
    message.newOwner !== undefined && (obj.newOwner = message.newOwner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateOwner>, I>>(object: I): MsgUpdateOwner {
    const message = createBaseMsgUpdateOwner();
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    message.newOwner = object.newOwner ?? "";
    return message;
  },
};
function createBaseMsgUpdateOwnerResponse(): MsgUpdateOwnerResponse {
  return {};
}
export const MsgUpdateOwnerResponse = {
  typeUrl: "/tokenfactory.tokenfactory.MsgUpdateOwnerResponse",
  encode(_: MsgUpdateOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOwnerResponse();
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
  fromJSON(_: any): MsgUpdateOwnerResponse {
    const obj = createBaseMsgUpdateOwnerResponse();
    return obj;
  },
  toJSON(_: MsgUpdateOwnerResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateOwnerResponse>, I>>(_: I): MsgUpdateOwnerResponse {
    const message = createBaseMsgUpdateOwnerResponse();
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
  CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
  UpdateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse>;
  DeleteDenom(request: MsgDeleteDenom): Promise<MsgDeleteDenomResponse>;
  UpdateOwner(request: MsgUpdateOwner): Promise<MsgUpdateOwnerResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.CreateDenom = this.CreateDenom.bind(this);
    this.UpdateDenom = this.UpdateDenom.bind(this);
    this.DeleteDenom = this.DeleteDenom.bind(this);
    this.UpdateOwner = this.UpdateOwner.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("tokenfactory.tokenfactory.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse> {
    const data = MsgCreateDenom.encode(request).finish();
    const promise = this.rpc.request("tokenfactory.tokenfactory.Msg", "CreateDenom", data);
    return promise.then((data) => MsgCreateDenomResponse.decode(new BinaryReader(data)));
  }
  UpdateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse> {
    const data = MsgUpdateDenom.encode(request).finish();
    const promise = this.rpc.request("tokenfactory.tokenfactory.Msg", "UpdateDenom", data);
    return promise.then((data) => MsgUpdateDenomResponse.decode(new BinaryReader(data)));
  }
  DeleteDenom(request: MsgDeleteDenom): Promise<MsgDeleteDenomResponse> {
    const data = MsgDeleteDenom.encode(request).finish();
    const promise = this.rpc.request("tokenfactory.tokenfactory.Msg", "DeleteDenom", data);
    return promise.then((data) => MsgDeleteDenomResponse.decode(new BinaryReader(data)));
  }
  UpdateOwner(request: MsgUpdateOwner): Promise<MsgUpdateOwnerResponse> {
    const data = MsgUpdateOwner.encode(request).finish();
    const promise = this.rpc.request("tokenfactory.tokenfactory.Msg", "UpdateOwner", data);
    return promise.then((data) => MsgUpdateOwnerResponse.decode(new BinaryReader(data)));
  }
}
