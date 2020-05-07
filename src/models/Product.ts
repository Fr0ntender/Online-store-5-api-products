/**
* Node, TS, Apollo, Auth, - Starter
* https://github.com/eduard-kirilov/node-ts-apollo-auth-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import mongoose from 'mongoose';
import { IProduct } from '../utils/interface';

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: String,
  subtitle: String,
  url: String,
  price: String,
});

export const Product = mongoose.model<IProduct>('Product', ProductSchema);
