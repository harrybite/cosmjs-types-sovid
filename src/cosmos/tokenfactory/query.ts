/* eslint-disable */
import { PageRequest, PageResponse } from "../base/query/v1beta1/pagination";
import { Params } from "./params";
import { Denom } from "./denom";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, Exact, isSet, Rpc } from "../../helpers";
export const protobufPackage = "tokenfactory.tokenfactory";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryGetDenomRequest {
  denom: string;
}
export interface QueryGetDenomResponse {
  denom: Denom;
}
export interface QueryAllDenomRequest {
  pagination?: PageRequest;
}
export interface QueryAllDenomResponse {
  denom: Denom[];
  pagination?: PageResponse;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/tokenfactory.tokenfactory.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  typeUrl: "/tokenfactory.tokenfactory.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseQueryGetDenomRequest(): QueryGetDenomRequest {
  return {
    denom: "",
  };
}
export const QueryGetDenomRequest = {
  typeUrl: "/tokenfactory.tokenfactory.QueryGetDenomRequest",
  encode(message: QueryGetDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetDenomRequest {
    const obj = createBaseQueryGetDenomRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: QueryGetDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetDenomRequest>, I>>(object: I): QueryGetDenomRequest {
    const message = createBaseQueryGetDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};
function createBaseQueryGetDenomResponse(): QueryGetDenomResponse {
  return {
    denom: Denom.fromPartial({}),
  };
}
export const QueryGetDenomResponse = {
  typeUrl: "/tokenfactory.tokenfactory.QueryGetDenomResponse",
  encode(message: QueryGetDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = Denom.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetDenomResponse {
    const obj = createBaseQueryGetDenomResponse();
    if (isSet(object.denom)) obj.denom = Denom.fromJSON(object.denom);
    return obj;
  },
  toJSON(message: QueryGetDenomResponse): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom ? Denom.toJSON(message.denom) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetDenomResponse>, I>>(object: I): QueryGetDenomResponse {
    const message = createBaseQueryGetDenomResponse();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = Denom.fromPartial(object.denom);
    }
    return message;
  },
};
function createBaseQueryAllDenomRequest(): QueryAllDenomRequest {
  return {
    pagination: undefined,
  };
}
export const QueryAllDenomRequest = {
  typeUrl: "/tokenfactory.tokenfactory.QueryAllDenomRequest",
  encode(message: QueryAllDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllDenomRequest {
    const obj = createBaseQueryAllDenomRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllDenomRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllDenomRequest>, I>>(object: I): QueryAllDenomRequest {
    const message = createBaseQueryAllDenomRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryAllDenomResponse(): QueryAllDenomResponse {
  return {
    denom: [],
    pagination: undefined,
  };
}
export const QueryAllDenomResponse = {
  typeUrl: "/tokenfactory.tokenfactory.QueryAllDenomResponse",
  encode(message: QueryAllDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denom) {
      Denom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom.push(Denom.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllDenomResponse {
    const obj = createBaseQueryAllDenomResponse();
    if (Array.isArray(object?.denom)) obj.denom = object.denom.map((e: any) => Denom.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllDenomResponse): unknown {
    const obj: any = {};
    if (message.denom) {
      obj.denom = message.denom.map((e) => (e ? Denom.toJSON(e) : undefined));
    } else {
      obj.denom = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllDenomResponse>, I>>(object: I): QueryAllDenomResponse {
    const message = createBaseQueryAllDenomResponse();
    message.denom = object.denom?.map((e) => Denom.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Denom items. */
  Denom(request: QueryGetDenomRequest): Promise<QueryGetDenomResponse>;
  DenomAll(request?: QueryAllDenomRequest): Promise<QueryAllDenomResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Denom = this.Denom.bind(this);
    this.DenomAll = this.DenomAll.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("tokenfactory.tokenfactory.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  Denom(request: QueryGetDenomRequest): Promise<QueryGetDenomResponse> {
    const data = QueryGetDenomRequest.encode(request).finish();
    const promise = this.rpc.request("tokenfactory.tokenfactory.Query", "Denom", data);
    return promise.then((data) => QueryGetDenomResponse.decode(new BinaryReader(data)));
  }
  DenomAll(
    request: QueryAllDenomRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<QueryAllDenomResponse> {
    const data = QueryAllDenomRequest.encode(request).finish();
    const promise = this.rpc.request("tokenfactory.tokenfactory.Query", "DenomAll", data);
    return promise.then((data) => QueryAllDenomResponse.decode(new BinaryReader(data)));
  }
}
