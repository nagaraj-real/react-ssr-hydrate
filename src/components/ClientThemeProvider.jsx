"use client"
import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import { withClientHydrate } from "../hoc/withClientHydrate";

export default withClientHydrate('client-theme', ThemeProvider);