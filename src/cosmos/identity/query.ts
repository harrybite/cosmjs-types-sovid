/* eslint-disable */
import { PageRequest, PageResponse } from "../base/query/v1beta1/pagination";
import { Params } from "./params";
import { User } from "./user";
import { Address } from "./address";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, Exact, isSet, Rpc } from "../../helpers";
export const protobufPackage = "identity.identity";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryGetUserRequest {
  did: string;
}
export interface QueryGetUserResponse {
  user: User;
}
export interface QueryAllUserRequest {
  pagination?: PageRequest;
}
export interface QueryAllUserResponse {
  user: User[];
  pagination?: PageResponse;
}
export interface QueryGetAddressRequest {
  owner: string;
}
export interface QueryGetAddressResponse {
  address: Address;
}
export interface QueryAllAddressRequest {
  pagination?: PageRequest;
}
export interface QueryAllAddressResponse {
  address: Address[];
  pagination?: PageResponse;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/identity.identity.QueryParamsRequest",
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
  typeUrl: "/identity.identity.QueryParamsResponse",
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
function createBaseQueryGetUserRequest(): QueryGetUserRequest {
  return {
    did: "",
  };
}
export const QueryGetUserRequest = {
  typeUrl: "/identity.identity.QueryGetUserRequest",
  encode(message: QueryGetUserRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetUserRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetUserRequest {
    const obj = createBaseQueryGetUserRequest();
    if (isSet(object.did)) obj.did = String(object.did);
    return obj;
  },
  toJSON(message: QueryGetUserRequest): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetUserRequest>, I>>(object: I): QueryGetUserRequest {
    const message = createBaseQueryGetUserRequest();
    message.did = object.did ?? "";
    return message;
  },
};
function createBaseQueryGetUserResponse(): QueryGetUserResponse {
  return {
    user: User.fromPartial({}),
  };
}
export const QueryGetUserResponse = {
  typeUrl: "/identity.identity.QueryGetUserResponse",
  encode(message: QueryGetUserResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetUserResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetUserResponse {
    const obj = createBaseQueryGetUserResponse();
    if (isSet(object.user)) obj.user = User.fromJSON(object.user);
    return obj;
  },
  toJSON(message: QueryGetUserResponse): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetUserResponse>, I>>(object: I): QueryGetUserResponse {
    const message = createBaseQueryGetUserResponse();
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    }
    return message;
  },
};
function createBaseQueryAllUserRequest(): QueryAllUserRequest {
  return {
    pagination: undefined,
  };
}
export const QueryAllUserRequest = {
  typeUrl: "/identity.identity.QueryAllUserRequest",
  encode(message: QueryAllUserRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUserRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserRequest();
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
  fromJSON(object: any): QueryAllUserRequest {
    const obj = createBaseQueryAllUserRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllUserRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllUserRequest>, I>>(object: I): QueryAllUserRequest {
    const message = createBaseQueryAllUserRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryAllUserResponse(): QueryAllUserResponse {
  return {
    user: [],
    pagination: undefined,
  };
}
export const QueryAllUserResponse = {
  typeUrl: "/identity.identity.QueryAllUserResponse",
  encode(message: QueryAllUserResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.user) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUserResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user.push(User.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllUserResponse {
    const obj = createBaseQueryAllUserResponse();
    if (Array.isArray(object?.user)) obj.user = object.user.map((e: any) => User.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllUserResponse): unknown {
    const obj: any = {};
    if (message.user) {
      obj.user = message.user.map((e) => (e ? User.toJSON(e) : undefined));
    } else {
      obj.user = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllUserResponse>, I>>(object: I): QueryAllUserResponse {
    const message = createBaseQueryAllUserResponse();
    message.user = object.user?.map((e) => User.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryGetAddressRequest(): QueryGetAddressRequest {
  return {
    owner: "",
  };
}
export const QueryGetAddressRequest = {
  typeUrl: "/identity.identity.QueryGetAddressRequest",
  encode(message: QueryGetAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetAddressRequest {
    const obj = createBaseQueryGetAddressRequest();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: QueryGetAddressRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAddressRequest>, I>>(object: I): QueryGetAddressRequest {
    const message = createBaseQueryGetAddressRequest();
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseQueryGetAddressResponse(): QueryGetAddressResponse {
  return {
    address: Address.fromPartial({}),
  };
}
export const QueryGetAddressResponse = {
  typeUrl: "/identity.identity.QueryGetAddressResponse",
  encode(message: QueryGetAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = Address.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetAddressResponse {
    const obj = createBaseQueryGetAddressResponse();
    if (isSet(object.address)) obj.address = Address.fromJSON(object.address);
    return obj;
  },
  toJSON(message: QueryGetAddressResponse): unknown {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = message.address ? Address.toJSON(message.address) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAddressResponse>, I>>(object: I): QueryGetAddressResponse {
    const message = createBaseQueryGetAddressResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = Address.fromPartial(object.address);
    }
    return message;
  },
};
function createBaseQueryAllAddressRequest(): QueryAllAddressRequest {
  return {
    pagination: undefined,
  };
}
export const QueryAllAddressRequest = {
  typeUrl: "/identity.identity.QueryAllAddressRequest",
  encode(message: QueryAllAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAddressRequest();
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
  fromJSON(object: any): QueryAllAddressRequest {
    const obj = createBaseQueryAllAddressRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllAddressRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllAddressRequest>, I>>(object: I): QueryAllAddressRequest {
    const message = createBaseQueryAllAddressRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryAllAddressResponse(): QueryAllAddressResponse {
  return {
    address: [],
    pagination: undefined,
  };
}
export const QueryAllAddressResponse = {
  typeUrl: "/identity.identity.QueryAllAddressResponse",
  encode(message: QueryAllAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.address) {
      Address.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address.push(Address.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllAddressResponse {
    const obj = createBaseQueryAllAddressResponse();
    if (Array.isArray(object?.address)) obj.address = object.address.map((e: any) => Address.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllAddressResponse): unknown {
    const obj: any = {};
    if (message.address) {
      obj.address = message.address.map((e) => (e ? Address.toJSON(e) : undefined));
    } else {
      obj.address = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllAddressResponse>, I>>(object: I): QueryAllAddressResponse {
    const message = createBaseQueryAllAddressResponse();
    message.address = object.address?.map((e) => Address.fromPartial(e)) || [];
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
  /** Queries a list of User items. */
  User(request: QueryGetUserRequest): Promise<QueryGetUserResponse>;
  UserAll(request?: QueryAllUserRequest): Promise<QueryAllUserResponse>;
  /** Queries a list of Address items. */
  Address(request: QueryGetAddressRequest): Promise<QueryGetAddressResponse>;
  AddressAll(request?: QueryAllAddressRequest): Promise<QueryAllAddressResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.User = this.User.bind(this);
    this.UserAll = this.UserAll.bind(this);
    this.Address = this.Address.bind(this);
    this.AddressAll = this.AddressAll.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("identity.identity.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  User(request: QueryGetUserRequest): Promise<QueryGetUserResponse> {
    const data = QueryGetUserRequest.encode(request).finish();
    const promise = this.rpc.request("identity.identity.Query", "User", data);
    return promise.then((data) => QueryGetUserResponse.decode(new BinaryReader(data)));
  }
  UserAll(
    request: QueryAllUserRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<QueryAllUserResponse> {
    const data = QueryAllUserRequest.encode(request).finish();
    const promise = this.rpc.request("identity.identity.Query", "UserAll", data);
    return promise.then((data) => QueryAllUserResponse.decode(new BinaryReader(data)));
  }
  Address(request: QueryGetAddressRequest): Promise<QueryGetAddressResponse> {
    const data = QueryGetAddressRequest.encode(request).finish();
    const promise = this.rpc.request("identity.identity.Query", "Address", data);
    return promise.then((data) => QueryGetAddressResponse.decode(new BinaryReader(data)));
  }
  AddressAll(
    request: QueryAllAddressRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<QueryAllAddressResponse> {
    const data = QueryAllAddressRequest.encode(request).finish();
    const promise = this.rpc.request("identity.identity.Query", "AddressAll", data);
    return promise.then((data) => QueryAllAddressResponse.decode(new BinaryReader(data)));
  }
}
