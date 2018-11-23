// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Flags: --allow-natives-syntax --harmony-sharedarraybuffer

// This test needs to be killed if we remove Atomics.wake.
assertNotSame(Atomics.wake, Atomics.notify);
