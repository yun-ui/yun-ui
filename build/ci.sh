#!/bin/bash

set -e
npm run lint
npm run unit
npm run build
npm run build:demo