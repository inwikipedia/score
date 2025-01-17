var columnData = [
					    {width:120,field:'NO',title:'No.',width:'3vw',},
					    {width:120,field:'calendar',title:'Time',templet:function(item){return oComFn.formatCalendar(item.calendar);}},
					    {width:120,field:'status',title:'Status',templet:function(item){return dialog_tlxHistory_getStatusText(item.status);}},
					    {width:120,field:'eacToday',title:'EacToday(kWh)',templet:function(item){return item.eacToday.toFixed(1);}},
						{width:120,field:'eacTotal',title:'EacTotal(kWh)',templet:function(item){return item.eacTotal.toFixed(1);}},
						{width:120,field:'ppv',title:'Ppv(W)',templet:function(item){return item.ppv.toFixed(1);}},
						{width:120,field:'ppv1',title:'Ppv1(W)',templet:function(item){return item.ppv1.toFixed(1);}},
						{width:120,field:'ppv2',title:'Ppv2(W)',templet:function(item){return item.ppv2.toFixed(1);}},
						{width:120,field:'ppv3',title:'Ppv3(W)',templet:function(item){return item.ppv3.toFixed(1);}},
						{width:120,field:'ppv4',title:'Ppv4(W)',templet:function(item){return item.ppv4.toFixed(1);}},
						{width:120,field:'pac',title:'Pac(W)',templet:function(item){return item.pac.toFixed(1);}},
						{width:120,field:'pacToUserTotal',title:'PacToUser(W)',templet:function(item){return item.pacToUserTotal.toFixed(1);}},
						{width:120,field:'pacToGridTotal',title:'PacToGrid(W)',templet:function(item){return item.pacToGridTotal.toFixed(1);}},
						{width:120,field:'pacToLocalLoad',title:'PacToLocalLoad(W)',templet:function(item){return item.pacToLocalLoad.toFixed(1);}},
						{width:120,field:'epsPac',title:'EpsPac(W)',templet:function(item){return item.epsPac.toFixed(1);}},
						{width:120,field:'vpv1',title:'Vpv1(V)',templet:function(item){return item.vpv1.toFixed(1);}},
						{width:120,field:'ipv1',title:'Ipv1(A)',templet:function(item){return item.ipv1.toFixed(1);}},	
						{width:120,field:'vpv2',title:'Vpv2(V)',templet:function(item){return item.vpv2.toFixed(1);}},
						{width:120,field:'ipv2',title:'Ipv2(A)',templet:function(item){return item.ipv2.toFixed(1);}},	
						{width:120,field:'vpv3',title:'Vpv3(V)',templet:function(item){return item.vpv3.toFixed(1);}},
						{width:120,field:'ipv3',title:'Ipv3(A)',templet:function(item){return item.ipv3.toFixed(1);}},	
						{width:120,field:'vpv4',title:'Vpv4(V)',templet:function(item){return item.vpv4.toFixed(1);}},
						{width:120,field:'ipv4',title:'Ipv4(A)',templet:function(item){return item.ipv4.toFixed(1);}},
						
						{width:120,field:'fac',title:'Fac(Hz)',templet:function(item){return item.fac.toFixed(1);}},						
						{width:120,field:'vac1',title:'Vac1(V)',templet:function(item){return item.vac1.toFixed(1);}},
						{width:120,field:'iac1',title:'Iac1(A)',templet:function(item){return item.iac1.toFixed(1);}},
						{width:120,field:'pac1',title:'Pac1(W)',templet:function(item){return item.pac1.toFixed(1);}},
						{width:120,field:'temp1',title:'Temp1(℃)',templet:function(item){return item.temp1.toFixed(1);}},
						{width:120,field:'temp5',title:'Temp5(℃)',templet:function(item){return item.temp5.toFixed(1);}},
						
						{width:120,field:'epsFac',title:'EpsFac(Hz)',templet:function(item){return item.epsFac.toFixed(1);}},	
						{width:120,field:'epsVac1',title:'EpsVac1(V)',templet:function(item){return item.epsVac1.toFixed(1);}},
						{width:120,field:'epsIac1',title:'EpsIac1(A)',templet:function(item){return item.epsIac1.toFixed(1);}},
						{width:120,field:'epsPac1',title:'EpsPac1(W)',templet:function(item){return item.epsPac1.toFixed(1);}},
						{width:120,field:'bdcStatus',title:'BdcStatus'},
						{width:120,field:'dryContactStatus',title:'DryContactStatus'},
						{width:120,field:'loadPercent',title:'LoadPercent'},
						{width:120,field:'uwSysWorkMode',title:'uwSysWorkMode'},
						
						{width:120,field:'etoUserToday',title:'EtoUserToday(kWh)',templet:function(item){return item.etoUserToday.toFixed(1);}},
						{width:120,field:'etoUserTotal',title:'EtoUserTotal(kWh)',templet:function(item){return item.etoUserTotal.toFixed(1);}},
						{width:120,field:'etoGridToday',title:'EtoGridToday(kWh)',templet:function(item){return item.etoGridToday.toFixed(1);}},
						{width:120,field:'etoGridTotal',title:'EtoGridTotal(kWh)',templet:function(item){return item.etoGridTotal.toFixed(1);}},						
						{width:120,field:'elocalLoadToday',title:'ElocalLoadToday(kWh)',templet:function(item){return item.elocalLoadToday.toFixed(1);}},
						{width:120,field:'elocalLoadTotal',title:'ElocalLoadTotal(kWh)',templet:function(item){return item.elocalLoadTotal.toFixed(1);}},
						{width:120,field:'epvTotal',title:'EpvTotal(kWh)',templet:function(item){return item.epvTotal.toFixed(1);}},
						{width:120,field:'echargeToday',title:'EchargeToday(kWh)',templet:function(item){return item.echargeToday.toFixed(1);}},						
						{width:120,field:'echargeTotal',title:'EchargeTotal(kWh)',templet:function(item){return item.echargeTotal.toFixed(1);}},
						{width:120,field:'edischargeToday',title:'EdischargeToday(kWh)',templet:function(item){return item.edischargeToday.toFixed(1);}},
						{width:120,field:'edischargeTotal',title:'EdischargeTotal(kWh)',templet:function(item){return item.edischargeTotal.toFixed(1);}},
						{width:120,field:'eacChargeToday',title:'EacChargeToday(kWh)',templet:function(item){return item.eacChargeToday.toFixed(1);}},
						{width:120,field:'eacChargeTotal',title:'EacChargeTotal(kWh)',templet:function(item){return item.eacChargeTotal.toFixed(1);}},
						
						{width:120,field:'bdc1Status',title:'Bdc1Status'},
						{width:120,field:'bdc1Mode',title:'Bdc1Mode'},
						{width:120,field:'bdc1Vbat',title:'Bdc1Vbat(V)',templet:function(item){return item.bdc1Vbat.toFixed(1);}},
						{width:120,field:'bdc1Ibat',title:'Bdc1Ibat(A)',templet:function(item){return item.bdc1Ibat.toFixed(1);}},
						{width:120,field:'bdc1Soc',title:'Bdc1Soc'},
						{width:120,field:'bdc1DischargePower',title:'Bdc1DischargePower(W)',templet:function(item){return item.bdc1DischargePower.toFixed(1);}},
						{width:120,field:'bdc1ChargePower',title:'Bdc1ChargePower(W)',templet:function(item){return item.bdc1ChargePower.toFixed(1);}},

						{width:120,field:'bdc2Status',title:'Bdc2Status'},
						{width:120,field:'bdc2Mode',title:'Bdc2Mode'},
						{width:120,field:'bdc2Vbat',title:'Bdc2Vbat(V)',templet:function(item){return item.bdc2Vbat.toFixed(1);}},
						{width:120,field:'bdc2Ibat',title:'Bdc2Ibat(A)',templet:function(item){return item.bdc2Ibat.toFixed(1);}},
						{width:120,field:'bdc2Soc',title:'Bdc2Soc'},
						{width:120,field:'bdc2DischargePower',title:'Bdc2DischargePower(W)',templet:function(item){return item.bdc2DischargePower.toFixed(1);}},
						{width:120,field:'bdc2ChargePower',title:'Bdc2ChargePower(W)',templet:function(item){return item.bdc2ChargePower.toFixed(1);}},
						
						{width:120,field:'bmsStatus',title:'BmsStatus'},
						{width:120,field:'bmsVbat',title:'BmsVbat(V)',templet:function(item){return item.bmsVbat.toFixed(1);}},
						{width:120,field:'bmsIbat',title:'BmsIbat(A)',templet:function(item){return item.bmsIbat.toFixed(1);}},
						{width:120,field:'bmsSoc',title:'BmsSoc'},
						{width:120,field:'bmsTemp1Bat',title:'BmsTemp1Bat(℃)',templet:function(item){return item.bmsTemp1Bat.toFixed(1);}},
						{width:120,field:'bmsInfo',title:'BmsInfo',templet:function(item){return item.bmsInfo.toFixed(1);}},
						{width:120,field:'bmsPackInfo',title:'BmsPackInfo',templet:function(item){return item.bmsPackInfo.toFixed(1);}},
						{width:120,field:'bmsUsingCap',title:'BmsUsingCap',templet:function(item){return item.bmsUsingCap.toFixed(1);}},
						{width:120,field:'bmsFwVersion',title:'BmsFwVersion'},
						{width:120,field:'bmsMcuVersion',title:'BmsMcuVersion'},
						{width:120,field:'bmsCommunicationType',title:'BmsCommunicationType'},
						{width:120,field:'isAgain',title:'isAgain',},
					];