// Automatically generated with Reach 0.1.10 (84dc282c)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (84dc282c)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    attended: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc2,
    Some: ctc4
    });
  const map0_ctc = ctc5;
  
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    attended: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc3]);
  return {
    mapDataTy: ctc4
    };
  };
export async function _Attendance_eventExpire3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Attendance_eventExpire3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Attendance_eventExpire3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    attended: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v266, v269, v270, v275] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc5, ctc5]);
  const v419 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:91:7:application',
    fs: ['at ./index.rsh:91:7:application call to [unknown function] (defined at: ./index.rsh:91:7:function exp)', 'at ./index.rsh:90:41:application call to [unknown function] (defined at: ./index.rsh:90:41:function exp)'],
    msg: 'in',
    who: 'Attendance_eventExpire'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v266, v269, v270, v275, v419],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:91:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v421], secs: v423, time: v422, didSend: v232, from: v420 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Attendance_eventExpire"
        });
      ;
      const v424 = true;
      const v425 = await txn1.getOutput('Attendance_eventExpire', 'v424', ctc1, v424);
      
      const v844 = stdlib.mul(v275, v269);
      sim_r.txns.push({
        amt: v844,
        kind: 'from',
        to: v266,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc5, ctc5, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v421], secs: v423, time: v422, didSend: v232, from: v420 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v424 = true;
  const v425 = await txn1.getOutput('Attendance_eventExpire', 'v424', ctc1, v424);
  stdlib.protect(ctc0, await interact.out(v421, v425), {
    at: './index.rsh:91:7:application',
    fs: ['at ./index.rsh:91:7:application call to [unknown function] (defined at: ./index.rsh:91:7:function exp)', 'at ./index.rsh:92:8:application call to "c" (defined at: ./index.rsh:91:7:function exp)', 'at ./index.rsh:90:41:application call to [unknown function] (defined at: ./index.rsh:90:41:function exp)'],
    msg: 'out',
    who: 'Attendance_eventExpire'
    });
  
  const v844 = stdlib.mul(v275, v269);
  ;
  return;
  
  
  
  };
export async function _Attendance_guestAttended3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Attendance_guestAttended3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Attendance_guestAttended3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    attended: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Tuple([ctc4]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Attendance_guestAttended0_67: ctc6,
    Guest_willAttend0_67: ctc7
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v266, v269, v270, v275] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc5, ctc5]);
  const v308 = ctc.selfAddress();
  const v310 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:67:11:application call to [unknown function] (defined at: ./index.rsh:67:11:function exp)', 'at ./index.rsh:38:53:application call to "runAttendance_guestAttended0_67" (defined at: ./index.rsh:65:9:function exp)', 'at ./index.rsh:38:53:application call to [unknown function] (defined at: ./index.rsh:38:53:function exp)'],
    msg: 'in',
    who: 'Attendance_guestAttended'
    });
  const v311 = v310[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v314 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v311), null);
  let v315;
  switch (v314[0]) {
    case 'None': {
      const v316 = v314[1];
      v315 = false;
      
      break;
      }
    case 'Some': {
      const v317 = v314[1];
      v315 = true;
      
      break;
      }
    }
  stdlib.assert(v315, {
    at: './index.rsh:69:14:application',
    fs: ['at ./index.rsh:67:11:application call to [unknown function] (defined at: ./index.rsh:67:11:function exp)', 'at ./index.rsh:67:11:application call to [unknown function] (defined at: ./index.rsh:67:11:function exp)', 'at ./index.rsh:38:53:application call to "runAttendance_guestAttended0_67" (defined at: ./index.rsh:65:9:function exp)', 'at ./index.rsh:38:53:application call to [unknown function] (defined at: ./index.rsh:38:53:function exp)'],
    msg: 'RSVP match found',
    who: 'Attendance_guestAttended'
    });
  const v318 = stdlib.addressEq(v308, v266);
  stdlib.assert(v318, {
    at: './index.rsh:71:14:application',
    fs: ['at ./index.rsh:67:11:application call to [unknown function] (defined at: ./index.rsh:67:11:function exp)', 'at ./index.rsh:67:11:application call to [unknown function] (defined at: ./index.rsh:67:11:function exp)', 'at ./index.rsh:38:53:application call to "runAttendance_guestAttended0_67" (defined at: ./index.rsh:65:9:function exp)', 'at ./index.rsh:38:53:application call to [unknown function] (defined at: ./index.rsh:38:53:function exp)'],
    msg: 'Event Organiser here',
    who: 'Attendance_guestAttended'
    });
  const v322 = ['Attendance_guestAttended0_67', v310];
  
  const txn1 = await (ctc.sendrecv({
    args: [v266, v269, v270, v275, v322],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:73:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v328], secs: v330, time: v329, didSend: v167, from: v327 } = txn1;
      
      switch (v328[0]) {
        case 'Attendance_guestAttended0_67': {
          const v331 = v328[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Attendance_guestAttended"
            });
          ;
          const v341 = v331[stdlib.checkedBigNumberify('./index.rsh:65:9:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v341), null);
          sim_r.txns.push({
            amt: v269,
            kind: 'from',
            to: v341,
            tok: undefined /* Nothing */
            });
          await stdlib.simMapSet(sim_r, 0, v341, undefined /* Nothing */);
          const v351 = true;
          const v352 = await txn1.getOutput('Attendance_guestAttended', 'v351', ctc1, v351);
          
          const v358 = stdlib.sub(v275, stdlib.checkedBigNumberify('./index.rsh:80:45:decimal', stdlib.UInt_max, '1'));
          const v846 = v358;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Guest_willAttend0_67': {
          const v374 = v328[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc5, ctc5, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v328], secs: v330, time: v329, didSend: v167, from: v327 } = txn1;
  switch (v328[0]) {
    case 'Attendance_guestAttended0_67': {
      const v331 = v328[1];
      undefined /* setApiDetails */;
      ;
      const v341 = v331[stdlib.checkedBigNumberify('./index.rsh:65:9:spread', stdlib.UInt_max, '0')];
      const v342 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v341), null);
      let v343;
      switch (v342[0]) {
        case 'None': {
          const v344 = v342[1];
          v343 = false;
          
          break;
          }
        case 'Some': {
          const v345 = v342[1];
          v343 = true;
          
          break;
          }
        }
      stdlib.assert(v343, {
        at: './index.rsh:75:14:application',
        fs: ['at ./index.rsh:74:16:application call to [unknown function] (defined at: ./index.rsh:74:16:function exp)'],
        msg: 'RSVP match found',
        who: 'Attendance_guestAttended'
        });
      const v346 = stdlib.addressEq(v327, v266);
      stdlib.assert(v346, {
        at: './index.rsh:76:14:application',
        fs: ['at ./index.rsh:74:16:application call to [unknown function] (defined at: ./index.rsh:74:16:function exp)'],
        msg: 'Event Organiser here',
        who: 'Attendance_guestAttended'
        });
      ;
      await stdlib.mapSet(map0, v341, undefined /* Nothing */);
      const v351 = true;
      const v352 = await txn1.getOutput('Attendance_guestAttended', 'v351', ctc1, v351);
      if (v167) {
        stdlib.protect(ctc0, await interact.out(v331, v352), {
          at: './index.rsh:66:7:application',
          fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:7:function exp)', 'at ./index.rsh:79:10:application call to "c" (defined at: ./index.rsh:74:16:function exp)', 'at ./index.rsh:74:16:application call to [unknown function] (defined at: ./index.rsh:74:16:function exp)'],
          msg: 'out',
          who: 'Attendance_guestAttended'
          });
        }
      else {
        }
      
      const v358 = stdlib.sub(v275, stdlib.checkedBigNumberify('./index.rsh:80:45:decimal', stdlib.UInt_max, '1'));
      const v846 = v358;
      return;
      
      break;
      }
    case 'Guest_willAttend0_67': {
      const v374 = v328[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Guest_willAttend3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Guest_willAttend3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Guest_willAttend3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    attended: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc4]);
  const ctc8 = stdlib.T_Data({
    Attendance_guestAttended0_67: ctc7,
    Guest_willAttend0_67: ctc6
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v266, v269, v270, v275] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc5, ctc5]);
  const v296 = ctc.selfAddress();
  const v298 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:49:10:application call to [unknown function] (defined at: ./index.rsh:49:10:function exp)', 'at ./index.rsh:38:53:application call to "runGuest_willAttend0_67" (defined at: ./index.rsh:47:9:function exp)', 'at ./index.rsh:38:53:application call to [unknown function] (defined at: ./index.rsh:38:53:function exp)'],
    msg: 'in',
    who: 'Guest_willAttend'
    });
  const v300 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v296), null);
  let v301;
  switch (v300[0]) {
    case 'None': {
      const v302 = v300[1];
      v301 = true;
      
      break;
      }
    case 'Some': {
      const v303 = v300[1];
      v301 = false;
      
      break;
      }
    }
  stdlib.assert(v301, {
    at: './index.rsh:52:14:application',
    fs: ['at ./index.rsh:49:10:application call to [unknown function] (defined at: ./index.rsh:49:10:function exp)', 'at ./index.rsh:49:10:application call to [unknown function] (defined at: ./index.rsh:49:10:function exp)', 'at ./index.rsh:38:53:application call to "runGuest_willAttend0_67" (defined at: ./index.rsh:47:9:function exp)', 'at ./index.rsh:38:53:application call to [unknown function] (defined at: ./index.rsh:38:53:function exp)'],
    msg: 'No RSVP match found',
    who: 'Guest_willAttend'
    });
  const v306 = ['Guest_willAttend0_67', v298];
  
  const txn1 = await (ctc.sendrecv({
    args: [v266, v269, v270, v275, v306],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v269, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v328], secs: v330, time: v329, didSend: v167, from: v327 } = txn1;
      
      switch (v328[0]) {
        case 'Attendance_guestAttended0_67': {
          const v331 = v328[1];
          
          break;
          }
        case 'Guest_willAttend0_67': {
          const v374 = v328[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Guest_willAttend"
            });
          sim_r.txns.push({
            amt: v269,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v327), null);
          const v408 = {
            attended: false
            };
          await stdlib.simMapSet(sim_r, 0, v327, v408);
          const v409 = true;
          const v410 = await txn1.getOutput('Guest_willAttend', 'v409', ctc1, v409);
          
          const v415 = stdlib.add(v275, stdlib.checkedBigNumberify('./index.rsh:62:45:decimal', stdlib.UInt_max, '1'));
          const v858 = v415;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc5, ctc5, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v328], secs: v330, time: v329, didSend: v167, from: v327 } = txn1;
  switch (v328[0]) {
    case 'Attendance_guestAttended0_67': {
      const v331 = v328[1];
      return;
      break;
      }
    case 'Guest_willAttend0_67': {
      const v374 = v328[1];
      undefined /* setApiDetails */;
      ;
      const v404 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v327), null);
      let v405;
      switch (v404[0]) {
        case 'None': {
          const v406 = v404[1];
          v405 = true;
          
          break;
          }
        case 'Some': {
          const v407 = v404[1];
          v405 = false;
          
          break;
          }
        }
      stdlib.assert(v405, {
        at: './index.rsh:58:14:application',
        fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:9:function exp)'],
        msg: 'No RSVP match found',
        who: 'Guest_willAttend'
        });
      const v408 = {
        attended: false
        };
      await stdlib.mapSet(map0, v327, v408);
      const v409 = true;
      const v410 = await txn1.getOutput('Guest_willAttend', 'v409', ctc1, v409);
      if (v167) {
        stdlib.protect(ctc0, await interact.out(v374, v410), {
          at: './index.rsh:48:7:application',
          fs: ['at ./index.rsh:48:7:application call to [unknown function] (defined at: ./index.rsh:48:7:function exp)', 'at ./index.rsh:61:10:application call to "c" (defined at: ./index.rsh:55:9:function exp)', 'at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:9:function exp)'],
          msg: 'out',
          who: 'Guest_willAttend'
          });
        }
      else {
        }
      
      const v415 = stdlib.add(v275, stdlib.checkedBigNumberify('./index.rsh:62:45:decimal', stdlib.UInt_max, '1'));
      const v858 = v415;
      return;
      
      break;
      }
    }
  
  
  };
export async function Organiser(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Organiser expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Organiser expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    attended: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '250'));
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    Attendance_guestAttended0_67: ctc8,
    Guest_willAttend0_67: ctc9
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v260 = stdlib.protect(ctc4, interact.eventDetails, 'for Organiser\'s interact field eventDetails');
  const v261 = stdlib.protect(ctc5, interact.eventEnd, 'for Organiser\'s interact field eventEnd');
  const v262 = stdlib.protect(ctc6, interact.eventName, 'for Organiser\'s interact field eventName');
  const v263 = stdlib.protect(ctc5, interact.ticketPrice, 'for Organiser\'s interact field ticketPrice');
  
  const txn1 = await (ctc.sendrecv({
    args: [v262, v260, v263, v261],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:29:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6, ctc4, ctc5, ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:29:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v267, v268, v269, v270], secs: v272, time: v271, didSend: v33, from: v266 } = txn1;
      
      ;
      
      const v274 = true;
      const v275 = stdlib.checkedBigNumberify('./index.rsh:38:61:decimal', stdlib.UInt_max, '0');
      const v276 = v271;
      
      if (await (async () => {
        
        return v274;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v431 = stdlib.mul(v275, v269);
        sim_r.txns.push({
          amt: v431,
          kind: 'from',
          to: v266,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc4, ctc5, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v267, v268, v269, v270], secs: v272, time: v271, didSend: v33, from: v266 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:30:23:application',
    fs: ['at ./index.rsh:30:23:application call to [unknown function] (defined at: ./index.rsh:30:23:function exp)', 'at ./index.rsh:30:23:application call to "liftedInteract" (defined at: ./index.rsh:30:23:application)'],
    msg: 'ready',
    who: 'Organiser'
    });
  
  let v274 = true;
  let v275 = stdlib.checkedBigNumberify('./index.rsh:38:61:decimal', stdlib.UInt_max, '0');
  let v276 = v271;
  
  while (await (async () => {
    
    return v274;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc10],
      timeoutAt: ['time', v270],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 3,
        out_tys: [ctc9],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v421], secs: v423, time: v422, didSend: v232, from: v420 } = txn3;
      undefined /* setApiDetails */;
      ;
      const v424 = true;
      await txn3.getOutput('Attendance_eventExpire', 'v424', ctc1, v424);
      const cv274 = false;
      const cv275 = v275;
      const cv276 = v422;
      
      v274 = cv274;
      v275 = cv275;
      v276 = cv276;
      
      continue;
      }
    else {
      const {data: [v328], secs: v330, time: v329, didSend: v167, from: v327 } = txn2;
      switch (v328[0]) {
        case 'Attendance_guestAttended0_67': {
          const v331 = v328[1];
          undefined /* setApiDetails */;
          ;
          const v341 = v331[stdlib.checkedBigNumberify('./index.rsh:65:9:spread', stdlib.UInt_max, '0')];
          const v342 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v341), null);
          let v343;
          switch (v342[0]) {
            case 'None': {
              const v344 = v342[1];
              v343 = false;
              
              break;
              }
            case 'Some': {
              const v345 = v342[1];
              v343 = true;
              
              break;
              }
            }
          stdlib.assert(v343, {
            at: './index.rsh:75:14:application',
            fs: ['at ./index.rsh:74:16:application call to [unknown function] (defined at: ./index.rsh:74:16:function exp)'],
            msg: 'RSVP match found',
            who: 'Organiser'
            });
          const v346 = stdlib.addressEq(v327, v266);
          stdlib.assert(v346, {
            at: './index.rsh:76:14:application',
            fs: ['at ./index.rsh:74:16:application call to [unknown function] (defined at: ./index.rsh:74:16:function exp)'],
            msg: 'Event Organiser here',
            who: 'Organiser'
            });
          ;
          await stdlib.mapSet(map0, v341, undefined /* Nothing */);
          const v351 = true;
          await txn2.getOutput('Attendance_guestAttended', 'v351', ctc1, v351);
          const v358 = stdlib.sub(v275, stdlib.checkedBigNumberify('./index.rsh:80:45:decimal', stdlib.UInt_max, '1'));
          const cv274 = true;
          const cv275 = v358;
          const cv276 = v329;
          
          v274 = cv274;
          v275 = cv275;
          v276 = cv276;
          
          continue;
          break;
          }
        case 'Guest_willAttend0_67': {
          const v374 = v328[1];
          undefined /* setApiDetails */;
          ;
          const v404 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v327), null);
          let v405;
          switch (v404[0]) {
            case 'None': {
              const v406 = v404[1];
              v405 = true;
              
              break;
              }
            case 'Some': {
              const v407 = v404[1];
              v405 = false;
              
              break;
              }
            }
          stdlib.assert(v405, {
            at: './index.rsh:58:14:application',
            fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:9:function exp)'],
            msg: 'No RSVP match found',
            who: 'Organiser'
            });
          const v408 = {
            attended: false
            };
          await stdlib.mapSet(map0, v327, v408);
          const v409 = true;
          await txn2.getOutput('Guest_willAttend', 'v409', ctc1, v409);
          const v415 = stdlib.add(v275, stdlib.checkedBigNumberify('./index.rsh:62:45:decimal', stdlib.UInt_max, '1'));
          const cv274 = true;
          const cv275 = v415;
          const cv276 = v329;
          
          v274 = cv274;
          v275 = cv275;
          v276 = cv276;
          
          continue;
          break;
          }
        }}
    
    }
  const v431 = stdlib.mul(v275, v269);
  ;
  return;
  
  
  };
export async function Attendance_eventExpire(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Attendance_eventExpire expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Attendance_eventExpire expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _Attendance_eventExpire3(ctcTop, interact);}
  };
export async function Attendance_guestAttended(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Attendance_guestAttended expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Attendance_guestAttended expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _Attendance_guestAttended3(ctcTop, interact);}
  };
export async function Guest_willAttend(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Guest_willAttend expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Guest_willAttend expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _Guest_willAttend3(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Attendance_eventExpire()byte`, `Attendance_guestAttended(address)byte`, `Guest_willAttend()byte`],
    pure: [],
    sigs: [`Attendance_eventExpire()byte`, `Attendance_guestAttended(address)byte`, `Guest_willAttend()byte`]
    },
  appApproval: `BiAIAAEDyMDy+g2lhvzBDyggMCYEAQAAAQECAAAiNQAxGEECsylkSSJbNQGBCFs1AjEZIxJBAAgxACgrZkICgTYaABdJQQA/IjUEIzUGSSUMQAAeSSEEDEAAECEEEkQ2GgE1/yg0/1BCAI8lEkQpQgAygYCqja4GEkQpNf8qNP9QMgNQQgBzNhoCFzUENhoDNhoBF0mBAgxAAU9JJAxAAFgkEkQkNAESRDQESSISTDQCEhFEKGRJNQMhBVs1/0k1BTX+gATImg+7NP5QsDIGNP8PRIAJAAAAAAAAAagBsCo1BzQDVwAgNAMhBls0/yI0AyEHWzIGQgFISCQ0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8hBls1/iEFWzX9IQdbNfxJNQU1+4AEosWz2zT7ULAyBjT9DEQ0+yJVQABhNPtXASA1+jT6Nfk0+YgBkEk19yJVQAAGIjX4QgAGIzX4QgAANPhEMQA0/xJEsSKyATT+sggjshA0+bIHszT5KCtmgAkAAAAAAAABXwGwKjUHNP80/jT9IzT8IwkyBkIAnzT+iAFHMQCIATVJNfkiVUAABiM1+kIABiI1+kIAADT6RDEAKIACAQBmgAkAAAAAAAABmQGwKjUHNP80/jT9IzT8IwgyBkIAVyISRCI0ARJENARJIhJMNAISEURJNQVJSlcAgDX/V4D6Nf6B+gJbNf2BggNbNfyABNHq8GU0/1A0/lA0/RZQNPwWULCBoI0GiAC6MQA0/TT8IyIyBkIAADX/Nf41/TX8Nfs1+jT9QQAgNPo0+xZQNPwWUDT+FlAoSwFXADhnSCQ1ATIGNQJCADKxIrIBNP40+wuyCCOyEDT6sgezQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8NJMRhhQAADSCuJKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 2,
  stateKeys: 1,
  stateSize: 56,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T5",
                "name": "v267",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem4",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem5",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem6",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes26",
                    "name": "elem7",
                    "type": "bytes26"
                  }
                ],
                "internalType": "struct T6",
                "name": "v268",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v269",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v270",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T5",
                "name": "v267",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem4",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem5",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem6",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes26",
                    "name": "elem7",
                    "type": "bytes26"
                  }
                ],
                "internalType": "struct T6",
                "name": "v268",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v269",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v270",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Attendance_guestAttended0_67",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Guest_willAttend0_67",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T12",
                "name": "v328",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v421",
                "type": "bool"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v351",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v409",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v424",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Attendance_eventExpire",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "Attendance_guestAttended",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Guest_willAttend",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "_attended",
                "type": "bool"
              }
            ],
            "internalType": "struct T0",
            "name": "_Some",
            "type": "tuple"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Attendance_guestAttended0_67",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Guest_willAttend0_67",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T12",
                "name": "v328",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v421",
                "type": "bool"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200195a3803806200195a833981016040819052620000269162000548565b60008055436003556040517f6f9d8755ecfd84e15aa802499b844b91767175f5e2a19b4fd4e8766a2d9a13469062000124903390849060006102008201905060018060a01b03841682528251602083015260208301518051805160408501526020810151606085015260408101516080850152606081015160a0850152506020810151805160c0850152602081015160e085015260408101516101008501526060810151610120850152608081015161014085015260a081015161016085015260c081015161018085015265ffffffffffff1960e0820151166101a08501525060408101516101c084015260608101516101e0840152509392505050565b60405180910390a16200013a34156007620001d3565b620001856040805160a0810182526000918101828152606082018390526080820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b8051339052602080830180516040908101518451840152905160600151835182015281830180516001905280516000930192909252905143910152620001cb81620001fd565b505062000676565b81620001f95760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60208101515115620002d0576200023e604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b8151516001600160a01b03168082528251602090810151818401908152845160409081015181860190815283870151840151606080880191825260036000554360015583519586019690965292519184019190915251928201929092529051608082015260a00160405160208183030381529060405260029080519060200190620002cb92919062000348565b505050565b8060000151600001516001600160a01b03166108fc8260000151602001518360200151602001516200030391906200060b565b6040518115909202916000818181858888f193505050501580156200032c573d6000803e3d6000fd5b50600080805560018190556200034590600290620003d7565b50565b828054620003569062000639565b90600052602060002090601f0160209004810192826200037a5760008555620003c5565b82601f106200039557805160ff1916838001178555620003c5565b82800160010185558215620003c5579182015b82811115620003c5578251825591602001919060010190620003a8565b50620003d392915062000411565b5090565b508054620003e59062000639565b6000825580601f10620003f6575050565b601f0160209004906000526020600020908101906200034591905b5b80821115620003d3576000815560010162000412565b60405161010081016001600160401b03811182821017156200045a57634e487b7160e01b600052604160045260246000fd5b60405290565b604080519081016001600160401b03811182821017156200045a57634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b03811182821017156200045a57634e487b7160e01b600052604160045260246000fd5b60006101008284031215620004d657600080fd5b620004e062000428565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015165ffffffffffff19811681146200053d57600080fd5b60e082015292915050565b60008183036101e08112156200055d57600080fd5b6200056762000460565b83518152601f19820191506101c0808312156200058357600080fd5b6200058d62000491565b60808412156200059c57600080fd5b620005a662000491565b935060208601518452604086015160208501526060860151604085015260808601516060850152838152620005df8760a08801620004c2565b60208201526101a086015160408201528186015160608201528060208401525050809250505092915050565b60008160001904831182151516156200063457634e487b7160e01b600052601160045260246000fd5b500290565b600181811c908216806200064e57607f821691505b602082108114156200067057634e487b7160e01b600052602260045260246000fd5b50919050565b6112d480620006866000396000f3fe6080604052600436106100845760003560e01c8063937abddb11610056578063937abddb14610116578063948c73a11461011e578063ab53f2c614610126578063b777f9a414610149578063e2186a081461015c57005b80631e93b0f11461008d5780633bc5b7bf146100b157806341c1ff4a146100de578063832307571461010157005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b3480156100bd57600080fd5b506100d16100cc366004610e4a565b61016f565b6040516100a89190610ea2565b6100f16100ec366004610e4a565b6101ad565b60405190151581526020016100a8565b34801561010d57600080fd5b5060015461009e565b6100f1610238565b6100f16102af565b34801561013257600080fd5b5061013b6102f8565b6040516100a8929190610ed5565b61008b610157366004610f32565b610395565b61008b61016a366004610f4a565b6103ce565b61019e604080516060810190915280600081526000602080830182905260408051918201815291815291015290565b6101a782610403565b92915050565b604080516060810182526000808252602082018190529181018290526101d1610cb3565b604080516060810182526000808252825160208082018552828252808401918252838501839052845180820186526001600160a01b038a168152909152908252825180820190935281835283019190915261022c82846104fb565b50506020015192915050565b6040805160608101825260008082526020820181905291810182905261025c610cb3565b60408051606081018252600080825282516020808201855282825280840191909152828401919091526001825282518082019093528183528301919091526102a482846104fb565b505060400151919050565b604080516060810182526000808252602082018190529181018290526102d3610cf5565b60408051602080820190925260008152908201526102f18183610984565b5051919050565b60006060600054600280805461030d90610f5c565b80601f016020809104026020016040519081016040528092919081815260200182805461033990610f5c565b80156103865780601f1061035b57610100808354040283529160200191610386565b820191906000526020600020905b81548152906001019060200180831161036957829003601f168201915b50505050509050915091509091565b60408051606081018252600080825260208201819052918101919091526103ca6103c43684900384018461103a565b826104fb565b5050565b60408051606081018252600080825260208201819052918101919091526103ca6103fd368490038401846110e2565b82610984565b610432604080516060810190915280600081526000602080830182905260408051918201815291815291015290565b60016001600160a01b03831660009081526004602052604090205460ff16600181111561046157610461610e6e565b14156104eb576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156104a2576104a2610e6e565b60018111156104b3576104b3610e6e565b81528154610100900460ff90811615156020808401919091526040805191820181526001909401549091161515815291015292915050565b600080825260208201525b919050565b61050b600360005414600d610b47565b815161052690158061051f57508251600154145b600e610b47565b60008080556002805461053890610f5c565b80601f016020809104026020016040519081016040528092919081815260200182805461056490610f5c565b80156105b15780601f10610586576101008083540402835291602001916105b1565b820191906000526020600020905b81548152906001019060200180831161059457829003601f168201915b50505050508060200190518101906105c99190611166565b90506106066040805160a0810182526000608082018181528252602080830182905282840182905283519081019093528252606081019190915290565b61061782604001514310600f610b47565b7fa9aced9cffae6bed23a1ecd20b395bf1ddeac0a53e8002b40e52a5cf29eb664833856040516106489291906111e3565b60405180910390a1600060208501515151600181111561066a5761066a610e6e565b141561082557602080850151510151815261068734156008610b47565b600081515161069590610403565b5160018111156106a7576106a7610e6e565b14156106b957600060208201526106e7565b60018151516106c790610403565b5160018111156106d9576106d9610e6e565b14156106e757600160208201525b6106f681602001516009610b47565b815161070e906001600160a01b03163314600a610b47565b80515160208301516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561074c573d6000803e3d6000fd5b508051516001600160a01b0316600090815260046020908152604091829020805461ffff191681556001908101805460ff1916905591519182527f0e23100769f5fa2b6882b6cf174442c4ac4a117f8effd1d5ff308d12bb548d53910160405180910390a1600160208401526107c0610d1f565b825181516001600160a01b039091169052602080840151825182015260408085015183519091015281015160019081905260608401516108009190611250565b6020808301805190910191909152514360409091015261081f81610b6c565b5061097e565b600160208501515151600181111561083f5761083f610e6e565b141561097e5761085682602001513414600b610b47565b600061086133610403565b51600181111561087357610873610e6e565b141561088557600160408201526108b0565b600161089033610403565b5160018111156108a2576108a2610e6e565b14156108b057600060408201525b6108bf8160400151600c610b47565b60608101805160009081905233815260046020908152604091829020805460ff199081166001908117835594515191850180549215159290911691909117905590519182527fc6cf68a45f9a13139b8d1e16eaa322bbc5cb4c9cb172bcf5ee6cedc7d360ebe4910160405180910390a16001604084015261093e610d1f565b825181516001600160a01b039091169052602080840151825182015260408085015183519091015281015160019081905260608401516108009190611267565b50505050565b6109946003600054146011610b47565b81516109af9015806109a857508251600154145b6012610b47565b6000808055600280546109c190610f5c565b80601f01602080910402602001604051908101604052809291908181526020018280546109ed90610f5c565b8015610a3a5780601f10610a0f57610100808354040283529160200191610a3a565b820191906000526020600020905b815481529060010190602001808311610a1d57829003601f168201915b5050505050806020019051810190610a529190611166565b9050610a6681604001514310156013610b47565b6040805133815284516020808301919091528501515115158183015290517fa5a264ad7bcb9788928e7795891942e9811712d8346314f9c3672363842f4e359181900360600190a1610aba34156010610b47565b604051600181527fd490ad978a298d4e349f2fdca2dfc06a66bda8efbf69c0921eaf7e46260b6ed89060200160405180910390a160018252610afa610d1f565b815181516001600160a01b03909116905260208083015182518201526040808401518351820152818301805160009052606085015181519093019290925290514391015261097e81610b6c565b816103ca5760405163100960cb60e01b81526004810182905260240160405180910390fd5b60208101515115610c3b57610bab604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b8151516001600160a01b03168082528251602090810151818401908152845160409081015181860190815283870151840151606080880191825260036000554360015583519586019690965292519184019190915251928201929092529051608082015260a00160405160208183030381529060405260029080519060200190610c36929190610d66565b505050565b8060000151600001516001600160a01b03166108fc826000015160200151836020015160200151610c6c919061127f565b6040518115909202916000818181858888f19350505050158015610c94573d6000803e3d6000fd5b5060008080556001819055610cab90600290610dea565b50565b905290565b604051806040016040528060008152602001610cae60408051608081018252600060208083018281528451918201855282825293830152606082015290815290565b604051806040016040528060008152602001610cae60405180602001604052806000151581525090565b6040805160a0810182526000918101828152606082018390526080820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b828054610d7290610f5c565b90600052602060002090601f016020900481019282610d945760008555610dda565b82601f10610dad57805160ff1916838001178555610dda565b82800160010185558215610dda579182015b82811115610dda578251825591602001919060010190610dbf565b50610de6929150610e20565b5090565b508054610df690610f5c565b6000825580601f10610e06575050565b601f016020900490600052602060002090810190610cab91905b5b80821115610de65760008155600101610e21565b6001600160a01b0381168114610cab57600080fd5b600060208284031215610e5c57600080fd5b8135610e6781610e35565b9392505050565b634e487b7160e01b600052602160045260246000fd5b60028110610cab57634e487b7160e01b600052602160045260246000fd5b81516060820190610eb281610e84565b808352506020830151151560208301526040830151511515604083015292915050565b82815260006020604081840152835180604085015260005b81811015610f0957858101830151858201606001528201610eed565b81811115610f1b576000606083870101525b50601f01601f191692909201606001949350505050565b600060808284031215610f4457600080fd5b50919050565b600060408284031215610f4457600080fd5b600181811c90821680610f7057607f821691505b60208210811415610f4457634e487b7160e01b600052602260045260246000fd5b6040805190810167ffffffffffffffff81118282101715610fc257634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715610fc257634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715610fc257634e487b7160e01b600052604160045260246000fd5b803580151581146104f657600080fd5b6000818303608081121561104d57600080fd5b611055610f91565b833581526060601f198301121561106b57600080fd5b611073610fc8565b61107b610ff9565b60208601356002811061108d57600080fd5b81526020603f19850112156110a157600080fd5b6110a9610fc8565b935060408601356110b981610e35565b8452602081018490526110ce6060870161102a565b604082015281526020820152949350505050565b600081830360408112156110f557600080fd5b6040516040810181811067ffffffffffffffff8211171561112657634e487b7160e01b600052604160045260246000fd5b604052833581526020601f198301121561113f57600080fd5b611147610fc8565b91506111556020850161102a565b825260208101919091529392505050565b60006080828403121561117857600080fd5b6040516080810181811067ffffffffffffffff821117156111a957634e487b7160e01b600052604160045260246000fd5b60405282516111b781610e35565b808252506020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b038381168252825160208084019190915283015151805160a0840192919061121181610e84565b806040860152508160208201515116606085015260408101511515608085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156112625761126261123a565b500390565b6000821982111561127a5761127a61123a565b500190565b60008160001904831182151516156112995761129961123a565b50029056fea2646970667358221220b6d731616e903644d630500f4c288a159953135897328c694179049813974af464736f6c634300080c0033`,
  BytecodeLen: 6490,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:98:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:38:53:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Attendance_eventExpire": Attendance_eventExpire,
  "Attendance_guestAttended": Attendance_guestAttended,
  "Guest_willAttend": Guest_willAttend,
  "Organiser": Organiser
  };
export const _APIs = {
  Attendance: {
    eventExpire: Attendance_eventExpire,
    guestAttended: Attendance_guestAttended
    },
  Guest: {
    willAttend: Guest_willAttend
    }
  };
