//defining global variables up here that can be adjusted by the program.
var abmod1 = ["+2","+2","+1","+0","-1","-1"];
var abmod3 = ["+2","+2","+1","+0","+0","-1"];
var abmod4 = ["+3","+3","+1","+0","+0","-1"];
var abmod6 = ["+4","+3","+1","+1","+0","-1"];
var abmod7 = ["+4","+3","+2","+1","+0","+0"];
var abmod9 = ["+5","+4","+2","+1","+1","+0"];
var abmod12 = ["+6","+4","+2","+1","+1","+0"];
var abmod14 = ["+6","+5","+3","+2","+1","+0"];
var abmod15 = ["+7","+5","+3","+2","+1","+0"];
var abmod17 = ["+7","+5","+3","+2","+1","+1"];
var abmod18 = ["+8","+5","+3","+2","+1","+1"];
var abmod19 = ["+8","+6","+3","+2","+2","+1"];
var abmod20 = ["+8","+6","+4","+2","+2","+1"];
var abmod21 = ["+9","+6","+4","+2","+2","+1"];
var abmod22 = ["+9","+6","+4","+3","+2","+1"];
var abmod23 = ["+10","+7","+4","+3","+2","+1"];
var abmod25 = ["+11","+7","+4","+3","+2","+1"];
var abmod27 = ["+12","+7","+4","+3","+2","+2"];
var abmod28 = ["+12","+7","+5","+3","+2","+2"];
var abmod29 = ["+12","+8","+5","+4","+3","+2"];
var abmod30 = ["+13","+8","+5","+4","+3","+2"];
var ACint = 11;
var prof = 3;
var dam = 7;
var damc = 0.1;
var initc = 0;
var ACcla = 0;
var ST = 0;
var spb= 30;
var ACr = 0;
var XPC = 0;
var DPR = 0;
var hpc = 0;
var chac = 0;
var hpt = 0;
var chat = 0;
var mhp = 0;
var mcha = 0;
var ahp = 0;
var acha = 0;
var str = 0;
var dex = 0;
var int = 0;
var wis = 0;
var hita = 0;
var hitt = 0;
var hitr = 0;
var savea = 0;
var savec = 0;
$(document).ready(function(){
    $("#classification").change(function(){
        var val = $(this).val();
        while(val =="minion"){
            mhp = 20;
            mcha = 20;
            ahp = 1;
            acha = 1;
            initc = -2;
            XPC = 0.25;
        if(val =="elite")break;}
        if(val =="elite"){
            hpc = 2;
            chac = 2;
            initc = -2;
            XPC = 2;
        }else if(val =="solo"){
            hpc = $("#playeram").val();
            chac = $("#playeram").val(); 
            initc = 4;
            XPC = 4;
        }
        $("#enemyt").change(function(){
            var val = $(this).val();
            if (val =="caster"){ ACcla = -2;
                savec = 3;
                hpt = 0.5;
                chat = 2;
                DPR = 1.25;
                ACcla = -2;
                ST = 0;
        }else if (val =="controller"){
                ACcla = -1;
                savec = 1;
                hpt = 0.75;
                DPR = 1;
                chat = 2;
                ST = 0;
    
            }else if (val =="defender"){
                ACcla = 3;
                savec = 3;
                hpt = 1.5;
                chat = 1;
                DPR = 0.5;
                ST = 10;
            }else if (val =="generalist"){
                ACcla = 2;
                savec = -2;
                hpt = 1;
                chat = 1;
                DPR = 1;
                ST = 0;
            }else if (val =="lurker"){
                ACcla = -3;
                savec = -3;
                hpt = 0.75;
                chat = 0.75;
                DPR = 1.75;
                ST = 5;
            }else if (val =="striker"){
                ACcla = 1;
                savec = -1;
                hpt = 1.25;
                chat = 0.75;
                DPR = 1.5;
                ST = 15;
            }else if (val =="supporter"){
                ACcla = 0;
                savec = 0;
                hpt = 1;
                chat = 1.5;
                DPR = 0.75;
                ST = 5;
            }else if (val =="iconic"){
                ACcla = 2;
                savec = 1;
                hpt = 2;
                chat = 2;
                DPR = 2;
                ST = 20;
            }
            $("#rank").change(function(){
                var val = $(this).val();
                var lvln = $("#lvl").val();
                var lvl = parseInt(lvln)
                if (val =="e"){ mhp = 2;
                    mcha = 2;
                    ahp = 2;
                    acha = 2;
                    hitr = -3;
                    saver = -3;
                    ACr =  -3;
                    bd = 0;
                }else if (val =="d"){
                    mhp = 4;
                    mcha = 4;
                    ahp = 3;
                    acha = 3;
                    hitr = -2;
                    saver = -2;
                    ACr = -2;
                    bd = 0;
                }else if (val =="c"){
                    mhp = 6;
                    mcha = 6;
                    ahp = 4;
                    acha = 4;
                    hitr = 0;
                    saver = 0;
                    ACr = 0;
                    bd = lvl;
                }else if (val =="b"){
                    mhp = 8;
                    mcha = 8;
                    ahp = 5;
                    acha = 5;
                    hitr = 0;
                    saver = 0; 
                    ACr = 0;
                    bd = Math.round(1.5*lvl);
                }else if (val =="a"){
                    mhp = 10;
                    mcha = 10;
                    ahp = 6;
                    acha = 6;
                    hitr = 1;
                    saver = 1;
                    ACr = 1;
                    bd = 2*lvl;
                }else if (val =="s"){
                    mhp = 12;
                    mcha = 12;
                    ahp = 7;
                    acha = 7;
                    hitr = 2;
                    saver = 2;
                    ACr = 2;
                    bd = Math.round(2.5*lvl);
                }
            });
            $('#str').change(function(){
                var dexche = $('#dex').val();
                var strche = $('#str').val();
                var stra = $( "#str option:selected" ).text();
                 str = parseInt(stra);
                 var dexa = $( "#dex option:selected" ).text();
                 dex = parseInt(dexa);
                if (strche < dexche) {
                    hita = hitr + str + prof;
                }else if (strche > dexche){
                    hita = hitr + dex + prof;
                }
            });
            $('#int').change(function(){
                var intche = $('#int').val();
                var wische = $('#wis').val();
                var inta = $( "#int option:selected" ).text();
                 str = parseInt(inta);
                 var wisa = $( "#wis option:selected" ).text();
                 wis = parseInt(wisa);
                if (intche < wische) {
                    savea = savec + saver + int + prof + 10;
                }else if (intche > wische){
                    savea = savec + saver + wis + prof + 10;
                }
            });
        
    

        });
    
    });
    $("#print").click(function(){
            
        //damage part of print function
        var dexche = $('#dex').val();
        var strche = $('#str').val();
        var stra = $( "#str option:selected" ).text();
        str = parseInt(stra);
        var dexa = $( "#dex option:selected" ).text();
        dex = parseInt(dexa);
    
        if (strche < dexche && strche) {
            var totdam = bd + dam + str
        }else if (strche > dexche && dexche){
            var totdam = bd + dam + dex
        }
        
        if (totdam <= 19){
            damact = Math.round(totdam*DPR);
        }else if (totdam > 19 && totdam <=39){
            damact = Math.round((totdam/2)*DPR);
        }else if (totdam >39 && totdam <=59){
            damact = Math.round((totdam/3)*DPR);
        }else if (totdam >59){
            damact = Math.round((totdam/4)*DPR);
        }
    //hp part of print function
    var cona = $( "#con option:selected" ).text();
        con = parseInt(cona);
        var lvln = $( "#lvl option:selected" ).val();
        var hpaa = hpc * (ahp+con) * parseInt(lvln);
        var hpam = hpc * (mhp+con) * parseInt(lvln);
        var chaaa = chac * (acha+con) * parseInt(lvln);
        var chaam = chac * (mcha+con) * parseInt(lvln);
        //AC part of print function.
        var ACact = ACcla + ACint + dex + (prof/2);
        //iniative part of function
        var init = initc + dex;
        //speed
        var speedact = ST + spb;
        //This is the temporary console log of everything.
        var name = $("#aname").val();
        console.log("Adversary is:", name);
        console.log("Adversary does:", damact, "per round");
        console.log("Adversary HP is: ", hpaa, "or ", hpam);
        console.log("Adversary Chakra is: ",chaaa, "or", chaam);
        console.log("Adversary to hit is: ", hita);
        console.log("Adversary AC is: ", ACact);
        console.log("Adversary initative is: ", init);
        console.log("Adversary speed is: ", speedact);
        console.log("The Save DC is: ", savea);
        
    });
});

//if else statement that cycles through enemy level and changes stat array as user clicks through
$(document).ready(function()  {
    $("#lvl").change(function(){
        var val = $(this).val();
        function stat(e,f){
            $("#str").append($('<option></option>').val(e).html(f));
            $("#dex").append($('<option></option>').val(e).html(f));
            $("#con").append($('<option></option>').val(e).html(f));
            $("#int").append($('<option></option>').val(e).html(f));
            $("#wis").append($('<option></option>').val(e).html(f));
            $("#cha").append($('<option></option>').val(e).html(f));
        }
        if (val =="1"){
            clear();
            $.each(abmod1, function(val, text) {
            stat(val,text);
        });
         ACint = 11;
         prof = 3;
         dam = 7;
    }else if(val =="2"){
        clear();
            $.each(abmod1, function(val, text) {
                stat(val,text);
        });
        ACint = 11;
         prof = 3;
         dam = 9;
    }else if(val =="3"){
        clear();
            $.each(abmod3, function(val, text) {
                stat(val,text);
                
    });
    ACint = 11;
         prof = 3;
         dam = 11;
}else if(val =="4"){
    clear();
        $.each(abmod4, function(val, text) {
            stat(val,text);
            
});
ACint = 12;
     prof = 4;
     dam = 13;
    }else if(val =="5"){
        clear();
            $.each(abmod4, function(val, text) {
                stat(val,text);
                
    });
    ACint = 12;
         prof = 4;
         dam = 15;
        }else if(val =="6"){
            clear();
                $.each(abmod6, function(val, text) {
                    stat(val,text);
                    
                });
            ACint = 12;
            prof = 4;
            dam = 18;
            }else if(val =="7"){
            clear();
            $.each(abmod7, function(val, text) {
                stat(val,text);
                        
        });
        ACint = 12;
        prof = 5;
        dam = 21;
        }else if(val =="8"){
        clear();
        $.each(abmod7, function(val, text) {
            stat(val,text);
                            
        });
        ACint = 12;
         prof = 5;
        dam = 25;
        }else if(val =="9"){
            clear();
            $.each(abmod9, function(val, text) {
                stat(val,text);
              });
            ACint = 12;
            prof = 5;
             dam = 28;
            }else if(val =="10"){
            clear();
                $.each(abmod9, function(val, text) {
                    stat(val,text);
                    });
                    ACint = 13;
                    prof = 6;
                     dam = 30;
                    }else if(val =="11"){
                    clear();
                    $.each(abmod9, function(val, text) {
                    stat(val,text);
                        });
                        ACint = 13;
                        prof = 6;
                        dam = 34;
                        }else if(val =="12"){
                        clear();
                        $.each(abmod12, function(val, text) {
                        stat(val,text);
                        });
                        ACint = 13;
                        prof = 6;
                        dam = 38;
                        }else if
                    (val =="13"){
                        clear();
                        $.each(abmod12, function(val, text) {
                        stat(val,text);
                        });
                        ACint = 13;
                        prof = 7;
                        dam = 40;
                        }else if(val =="14"){
                        clear();
                        $.each(abmod14, function(val, text) {
                        stat(val,text);
                        });
                         ACint = 13;
                          prof = 7;
                          dam = 42;
                         }else if(val =="15"){
                         clear();
                         $.each(abmod15, function(val, text) {
                        stat(val,text);
                           });
                           ACint = 13;
                            prof = 7;
                            dam = 45;
                           }else if(val =="16"){
                           clear();
                          $.each(abmod15, function(val, text) {
                        stat(val,text);
                             });
                              ACint = 14;
                              prof = 8;
                              dam = 47;
                               }else if(val =="16"){
                               clear();
                              $.each(abmod15, function(val, text) {
                                stat(val,text);
                             
                             ACint = 14;
                              prof = 8;
                              dam = 47;
                             });}else if(val =="17"){
                            clear();
                            $.each(abmod17, function(val, text) {
                            stat(val,text);
                            });
                            ACint = 14;
                            prof = 8;
                            dam = 49;
                            }else if(val =="18"){
                            clear();
                            $.each(abmod18, function(val, text) {
                            stat(val,text);       
                                });
                                ACint = 14;
                                prof = 8;
                                dam = 50;
                                }else if(val =="19"){
                                clear();
                                $.each(abmod19, function(val, text){
                                stat(val,text);
                                 });
                                ACint = 14;
                                prof = 9;
                                dam = 54;
                                }else if(val =="20"){
                             clear();
                                $.each(abmod20, function(val, text) {
                                stat(val,text);
                                 });
                                 ACint = 14;
                               prof = 9;
                                 dam = 58;
                                 }else if(val =="21"){
                                 clear();
                                  $.each(abmod21, function(val, text) {
                                    stat(val,text);
                                     });
                                     ACint = 14;
                                     prof = 9;
                                    dam = 60;
                                      }else if(val =="22"){
                                       clear();
                                     $.each(abmod22, function(val, text) {
                                    stat(val,text);
                                      });
                                      ACint = 15;
                                      prof = 10;
                                       dam = 64;
                                       }else if(val =="23"){
                                       clear();
                                    $.each(abmod23, function(val, text) {
                                    stat(val,text);
                                    });
                                    ACint = 15;
                                    prof = 10;
                                     dam = 67;
                                    }else if(val =="24"){
                                    clear();
                                $.each(abmod23, function(val, text) {
                                stat(val,text);
                                  });
                                ACint = 15;
                                 prof = 10;
                                 dam = 70;
                                  }else if(val =="25"){
                                   clear();
                                    $.each(abmod25, function(val, text) {
                                    stat(val,text);
                                     });
                                    ACint = 15;
                                    prof = 11;
                                    dam = 73;
                                    }else if(val =="26"){
                                    clear();
                                    $.each(abmod25, function(val, text) {
                                    stat(val,text);
                                    });
                                    ACint = 15;
                                    prof = 11;
                                    dam = 75;
                                    }else if(val =="27"){
                                        clear();
                                        $.each(abmod27, function(val, text) {
                                        stat(val,text);
                                        });
                                        ACint = 15;
                                        prof = 11;
                                        dam = 78;
                                        }else if(val =="28"){
                                            clear();
                                            $.each(abmod28, function(val, text) {
                                            stat(val,text);
                                            });
                                            ACint = 16;
                                            prof = 12;
                                            dam = 80;
                                            }else if(val =="29"){
                                                clear();
                                                $.each(abmod29, function(val, text) {
                                                stat(val,text);
                                                });
                                                ACint = 16;
                                                prof = 12;
                                                dam = 85;
                                                }else if(val =="30"){
                                                    clear();
                                                    $.each(abmod30, function(val, text) {
                                                    stat(val,text);
                                                    });
                                                    ACint = 16;
                                                    prof = 12;
                                                    dam = 90;
                                                    }
                });
            });
        
    
    function clear(){
        $("#str").empty();
        $("#dex").empty();
        $("#con").empty();
        $("#int").empty();
        $("#wis").empty();
        $("#cha").empty();
    };
