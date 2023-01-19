//defining global variables up here that can be adjusted by the program.
var ACint = 11;
var prof = 3;
var dam = 7;
//var ACact = ACint + ACcla + dex
var ACcla = 0
var ST = 0;
var spb= 30;
//var smhp = plnmb * hp;
//var smcha = plnmb * cha;
var emhp = mhp * 2;
var emcha = mcha * 2;
var mhp = 0;
var mcha = 0;
var ahp = 0;
var acha = 0;
//var hita = hitt + modifier which will be a function of highest selected attribute between dex and str.
//var savea = savet + modifier which will be function of highest selected attribute between int and wis
var hitt = 0;
var savet = 0;

//Make a function for inputed information to print out legible information.
//Make a function to register certain inputed information and calculate
//format information printed
//
//This function prints out text given from inputed values
function printname(){
    var giveName = document.getElementById("aname").value;
    document.getElementById("printHello").innerHTML = "Hello" + giveName
}

//This function recognizes the drop down and prints out a value.
function printnumber(){
    var health = document.getElementById("classification").value;
    if(health ==="minion"){
        document.getElementById("printNumber").innerHTML = "Hp = 1-20"
    }
    }
    //array for enemy statistics
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
    //function to populate enemy statistics from array
    var mySelect = $('#str');
    $.each(abmod1, function(abmod, text) {
    mySelect.append(
        $('<option></option>').val(abmod).html(text)
    );
    });
//if else statement that cycles through enemy level and changes stat array as user clicks through
$(document).ready(function()  {
    $("#lvl").change(function(){
        var val = $(this).val();
        if (val =="1"){
            clear();
            $.each(abmod1, function(val, text) {
            $("#str").append($('<option></option>').val(val).html(text));
            $("#dex").append($('<option></option>').val(val).html(text));
            $("#con").append($('<option></option>').val(val).html(text));
            $("#int").append($('<option></option>').val(val).html(text));
            $("#wis").append($('<option></option>').val(val).html(text));
            $("#cha").append($('<option></option>').val(val).html(text));
        });
         ACint = 11;
         prof = 3;
         dam = 7;
    }else if(val =="2"){
        clear();
            $.each(abmod1, function(val, text) {
            $("#str").append($('<option></option>').val(val).html(text));
            $("#dex").append($('<option></option>').val(val).html(text));
            $("#con").append($('<option></option>').val(val).html(text));
            $("#int").append($('<option></option>').val(val).html(text));
            $("#wis").append($('<option></option>').val(val).html(text));
            $("#cha").append($('<option></option>').val(val).html(text));
        });
        ACint = 11;
         prof = 3;
         dam = 9;
    }else if(val =="3"){
        clear();
            $.each(abmod3, function(val, text) {
            $("#str").append($('<option></option>').val(val).html(text));
            $("#dex").append($('<option></option>').val(val).html(text));
            $("#con").append($('<option></option>').val(val).html(text));
            $("#int").append($('<option></option>').val(val).html(text));
            $("#wis").append($('<option></option>').val(val).html(text));
            $("#cha").append($('<option></option>').val(val).html(text));
                
    });
    ACint = 11;
         prof = 3;
         dam = 11;
}else if(val =="4"){
    clear();
        $.each(abmod4, function(val, text) {
        $("#str").append($('<option></option>').val(val).html(text));
        $("#dex").append($('<option></option>').val(val).html(text));
        $("#con").append($('<option></option>').val(val).html(text));
        $("#int").append($('<option></option>').val(val).html(text));
        $("#wis").append($('<option></option>').val(val).html(text));
        $("#cha").append($('<option></option>').val(val).html(text));
            
});
ACint = 12;
     prof = 4;
     dam = 13;
    }else if(val =="5"){
        clear();
            $.each(abmod4, function(val, text) {
            $("#str").append($('<option></option>').val(val).html(text));
            $("#dex").append($('<option></option>').val(val).html(text));
            $("#con").append($('<option></option>').val(val).html(text));
            $("#int").append($('<option></option>').val(val).html(text));
            $("#wis").append($('<option></option>').val(val).html(text));
            $("#cha").append($('<option></option>').val(val).html(text));
                
    });
    ACint = 12;
         prof = 4;
         dam = 15;
        }else if(val =="6"){
            clear();
                $.each(abmod6, function(val, text) {
                $("#str").append($('<option></option>').val(val).html(text));
                $("#dex").append($('<option></option>').val(val).html(text));
                $("#con").append($('<option></option>').val(val).html(text));
                $("#int").append($('<option></option>').val(val).html(text));
                $("#wis").append($('<option></option>').val(val).html(text));
                $("#cha").append($('<option></option>').val(val).html(text));
                    
                });
            ACint = 12;
            prof = 4;
            dam = 18;
            }else if(val =="7"){
            clear();
            $.each(abmod7, function(val, text) {
        $("#str").append($('<option></option>').val(val).html(text));
        $("#dex").append($('<option></option>').val(val).html(text));
        $("#con").append($('<option></option>').val(val).html(text));
        $("#int").append($('<option></option>').val(val).html(text));
        $("#wis").append($('<option></option>').val(val).html(text));
        $("#cha").append($('<option></option>').val(val).html(text));
                        
        });
        ACint = 12;
        prof = 5;
        dam = 21;
        }else if(val =="8"){
        clear();
        $.each(abmod7, function(val, text) {
        $("#str").append($('<option></option>').val(val).html(text));
        $("#dex").append($('<option></option>').val(val).html(text));
        $("#con").append($('<option></option>').val(val).html(text));
        $("#int").append($('<option></option>').val(val).html(text));
        $("#wis").append($('<option></option>').val(val).html(text));
        $("#cha").append($('<option></option>').val(val).html(text));
                            
        });
        ACint = 12;
         prof = 5;
        dam = 25;
        }else if(val =="9"){
            clear();
            $.each(abmod9, function(val, text) {
            $("#str").append($('<option></option>').val(val).html(text));
            $("#dex").append($('<option></option>').val(val).html(text));
            $("#con").append($('<option></option>').val(val).html(text));
             $("#int").append($('<option></option>').val(val).html(text));
             $("#wis").append($('<option></option>').val(val).html(text));
             $("#cha").append($('<option></option>').val(val).html(text));
              });
            ACint = 12;
            prof = 5;
             dam = 28;
            }else if(val =="10"){
            clear();
                $.each(abmod9, function(val, text) {
                $("#str").append($('<option></option>').val(val).html(text));
                $("#dex").append($('<option></option>').val(val).html(text));
                 $("#con").append($('<option></option>').val(val).html(text));
                 $("#int").append($('<option></option>').val(val).html(text));
                 $("#wis").append($('<option></option>').val(val).html(text));
                 $("#cha").append($('<option></option>').val(val).html(text));
                    });
                    ACint = 13;
                    prof = 6;
                     dam = 30;
                    }else if(val =="11"){
                    clear();
                    $.each(abmod9, function(val, text) {
                    $("#str").append($('<option></option>').val(val).html(text));
                    $("#dex").append($('<option></option>').val(val).html(text));
                    $("#con").append($('<option></option>').val(val).html(text));
                    $("#int").append($('<option></option>').val(val).html(text));
                    $("#wis").append($('<option></option>').val(val).html(text));
                    $("#cha").append($('<option></option>').val(val).html(text));
                        });
                        ACint = 13;
                        prof = 6;
                        dam = 34;
                        }else if(val =="12"){
                        clear();
                        $.each(abmod12, function(val, text) {
                        $("#str").append($('<option></option>').val(val).html(text));
                        $("#dex").append($('<option></option>').val(val).html(text));
                        $("#con").append($('<option></option>').val(val).html(text));
                        $("#int").append($('<option></option>').val(val).html(text));
                        $("#wis").append($('<option></option>').val(val).html(text));
                        $("#cha").append($('<option></option>').val(val).html(text));
                        });
                        ACint = 13;
                        prof = 6;
                        dam = 38;
                        }else if(val =="13"){
                        clear();
                        $.each(abmod12, function(val, text) {
                        $("#str").append($('<option></option>').val(val).html(text));
                        $("#dex").append($('<option></option>').val(val).html(text));
                        $("#con").append($('<option></option>').val(val).html(text));
                        $("#int").append($('<option></option>').val(val).html(text));
                        $("#wis").append($('<option></option>').val(val).html(text));
                        $("#cha").append($('<option></option>').val(val).html(text));
                        });
                        ACint = 13;
                        prof = 7;
                        dam = 40;
                        }else if(val =="14"){
                        clear();
                        $.each(abmod14, function(val, text) {
                        $("#str").append($('<option></option>').val(val).html(text));
                        $("#dex").append($('<option></option>').val(val).html(text));
                        $("#con").append($('<option></option>').val(val).html(text));
                        $("#int").append($('<option></option>').val(val).html(text));
                        $("#wis").append($('<option></option>').val(val).html(text));
                        $("#cha").append($('<option></option>').val(val).html(text));
                        });
                         ACint = 13;
                          prof = 7;
                          dam = 42;
                         }else if(val =="15"){
                         clear();
                         $.each(abmod15, function(val, text) {
                         $("#str").append($('<option></option>').val(val).html(text));
                          $("#dex").append($('<option></option>').val(val).html(text));
                           $("#con").append($('<option></option>').val(val).html(text));
                          $("#int").append($('<option></option>').val(val).html(text));
                          $("#wis").append($('<option></option>').val(val).html(text));
                          $("#cha").append($('<option></option>').val(val).html(text));
                           });
                           ACint = 13;
                            prof = 7;
                            dam = 45;
                           }else if(val =="16"){
                           clear();
                          $.each(abmod15, function(val, text) {
                          $("#str").append($('<option></option>').val(val).html(text));
                           $("#dex").append($('<option></option>').val(val).html(text));
                            $("#con").append($('<option></option>').val(val).html(text));
                            $("#int").append($('<option></option>').val(val).html(text));
                            $("#wis").append($('<option></option>').val(val).html(text));
                            $("#cha").append($('<option></option>').val(val).html(text));
                             });
                              ACint = 14;
                              prof = 8;
                              dam = 47;
                               }else if(val =="16"){
                               clear();
                              $.each(abmod15, function(val, text) {
                              $("#str").append($('<option></option>').val(val).html(text));
                            $("#dex").append($('<option></option>').val(val).html(text));
                             $("#con").append($('<option></option>').val(val).html(text));
                             $("#int").append($('<option></option>').val(val).html(text));
                             $("#wis").append($('<option></option>').val(val).html(text));
                             $("#cha").append($('<option></option>').val(val).html(text));
                             });
                             ACint = 14;
                              prof = 8;
                              dam = 47;
                             }else if(val =="17"){
                                clear();
                                $.each(abmod17, function(val, text) {
                                $("#str").append($('<option></option>').val(val).html(text));
                                $("#dex").append($('<option></option>').val(val).html(text));
                                $("#con").append($('<option></option>').val(val).html(text));
                                $("#int").append($('<option></option>').val(val).html(text));
                                $("#wis").append($('<option></option>').val(val).html(text));
                                $("#cha").append($('<option></option>').val(val).html(text));
                                        
                            });
                            ACint = 14;
                                 prof = 8;
                                 dam = 49;
                                }else if(val =="18"){
                                    clear();
                                    $.each(abmod18, function(val, text) {
                                     $("#str").append($('<option></option>').val(val).html(text));
                                    $("#dex").append($('<option></option>').val(val).html(text));
                                    $("#con").append($('<option></option>').val(val).html(text));
                                     $("#int").append($('<option></option>').val(val).html(text));
                                    $("#wis").append($('<option></option>').val(val).html(text));
                                     $("#cha").append($('<option></option>').val(val).html(text));
                                            
                                });
                                ACint = 14;
                                prof = 8;
                                dam = 50;
                                }else if(val =="19"){
                                clear();
                                $.each(abmod19, function(val, text) {
                                $("#str").append($('<option></option>').val(val).html(text));
                                $("#dex").append($('<option></option>').val(val).html(text));
                                $("#con").append($('<option></option>').val(val).html(text));
                                $("#int").append($('<option></option>').val(val).html(text));
                                $("#wis").append($('<option></option>').val(val).html(text));
                                $("#cha").append($('<option></option>').val(val).html(text));
                                 });
                                ACint = 14;
                                prof = 9;
                                dam = 54;
                                }else if(val =="20"){
                             clear();
                                $.each(abmod20, function(val, text) {
                                 $("#str").append($('<option></option>').val(val).html(text));
                                $("#dex").append($('<option></option>').val(val).html(text));
                                $("#con").append($('<option></option>').val(val).html(text));
                                $("#int").append($('<option></option>').val(val).html(text));
                                $("#wis").append($('<option></option>').val(val).html(text));
                                $("#cha").append($('<option></option>').val(val).html(text));
                                 });
                                 ACint = 14;
                               prof = 9;
                                 dam = 58;
                                 }else if(val =="21"){
                                 clear();
                                  $.each(abmod21, function(val, text) {
                                  $("#str").append($('<option></option>').val(val).html(text));
                                  $("#dex").append($('<option></option>').val(val).html(text));
                                   $("#con").append($('<option></option>').val(val).html(text));
                                    $("#int").append($('<option></option>').val(val).html(text));
                                     $("#wis").append($('<option></option>').val(val).html(text));
                                      $("#cha").append($('<option></option>').val(val).html(text));
                                     });
                                     ACint = 14;
                                     prof = 9;
                                    dam = 60;
                                      }else if(val =="22"){
                                       clear();
                                     $.each(abmod22, function(val, text) {
                                     $("#str").append($('<option></option>').val(val).html(text));
                                    $("#dex").append($('<option></option>').val(val).html(text));
                                     $("#con").append($('<option></option>').val(val).html(text));
                                     $("#int").append($('<option></option>').val(val).html(text));
                                      $("#wis").append($('<option></option>').val(val).html(text));
                                      $("#cha").append($('<option></option>').val(val).html(text));
                                      });
                                      ACint = 15;
                                      prof = 10;
                                       dam = 64;
                                       }else if(val =="23"){
                                       clear();
                                    $.each(abmod23, function(val, text) {
                                     $("#str").append($('<option></option>').val(val).html(text));
                                     $("#dex").append($('<option></option>').val(val).html(text));
                                     $("#con").append($('<option></option>').val(val).html(text));
                                $("#int").append($('<option></option>').val(val).html(text));
                                    $("#wis").append($('<option></option>').val(val).html(text));
                                    $("#cha").append($('<option></option>').val(val).html(text));
                                    });
                                    ACint = 15;
                                    prof = 10;
                                     dam = 67;
                                    }else if(val =="24"){
                                    clear();
                                $.each(abmod23, function(val, text) {
                                $("#str").append($('<option></option>').val(val).html(text));
                                $("#dex").append($('<option></option>').val(val).html(text));
                                $("#con").append($('<option></option>').val(val).html(text));
                                $("#int").append($('<option></option>').val(val).html(text));
                                $("#wis").append($('<option></option>').val(val).html(text));
                                $("#cha").append($('<option></option>').val(val).html(text));
                                  });
                                ACint = 15;
                                 prof = 10;
                                 dam = 70;
                                  }else if(val =="25"){
                                   clear();
                                    $.each(abmod25, function(val, text) {
                                    $("#str").append($('<option></option>').val(val).html(text));
                                    $("#dex").append($('<option></option>').val(val).html(text));
                                    $("#con").append($('<option></option>').val(val).html(text));
                                    $("#int").append($('<option></option>').val(val).html(text));
                                    $("#wis").append($('<option></option>').val(val).html(text));
                                    $("#cha").append($('<option></option>').val(val).html(text));
                                     });
                                    ACint = 15;
                                    prof = 11;
                                    dam = 73;
                                    }else if(val =="26"){
                                    clear();
                                    $.each(abmod26, function(val, text) {
                                    $("#str").append($('<option></option>').val(val).html(text));
                                    $("#dex").append($('<option></option>').val(val).html(text));
                                    $("#con").append($('<option></option>').val(val).html(text));
                                    $("#int").append($('<option></option>').val(val).html(text));
                                    $("#wis").append($('<option></option>').val(val).html(text));
                                    $("#cha").append($('<option></option>').val(val).html(text));
                                    });
                                    ACint = 15;
                                    prof = 11;
                                    dam = 75;
                                    }else if(val =="27"){
                                        clear();
                                        $.each(abmod27, function(val, text) {
                                        $("#str").append($('<option></option>').val(val).html(text));
                                        $("#dex").append($('<option></option>').val(val).html(text));
                                        $("#con").append($('<option></option>').val(val).html(text));
                                        $("#int").append($('<option></option>').val(val).html(text));
                                        $("#wis").append($('<option></option>').val(val).html(text));
                                        $("#cha").append($('<option></option>').val(val).html(text));
                                        });
                                        ACint = 15;
                                        prof = 11;
                                        dam = 78;
                                        }else if(val =="28"){
                                            clear();
                                            $.each(abmod28, function(val, text) {
                                            $("#str").append($('<option></option>').val(val).html(text));
                                            $("#dex").append($('<option></option>').val(val).html(text));
                                            $("#con").append($('<option></option>').val(val).html(text));
                                            $("#int").append($('<option></option>').val(val).html(text));
                                            $("#wis").append($('<option></option>').val(val).html(text));
                                            $("#cha").append($('<option></option>').val(val).html(text));
                                            });
                                            ACint = 16;
                                            prof = 12;
                                            dam = 80;
                                            }else if(val =="29"){
                                                clear();
                                                $.each(abmod29, function(val, text) {
                                                $("#str").append($('<option></option>').val(val).html(text));
                                                $("#dex").append($('<option></option>').val(val).html(text));
                                                $("#con").append($('<option></option>').val(val).html(text));
                                                $("#int").append($('<option></option>').val(val).html(text));
                                                $("#wis").append($('<option></option>').val(val).html(text));
                                                $("#cha").append($('<option></option>').val(val).html(text));
                                                });
                                                ACint = 16;
                                                prof = 12;
                                                dam = 85;
                                                }else if(val =="30"){
                                                    clear();
                                                    $.each(abmod30, function(val, text) {
                                                    $("#str").append($('<option></option>').val(val).html(text));
                                                    $("#dex").append($('<option></option>').val(val).html(text));
                                                    $("#con").append($('<option></option>').val(val).html(text));
                                                    $("#int").append($('<option></option>').val(val).html(text));
                                                    $("#wis").append($('<option></option>').val(val).html(text));
                                                    $("#cha").append($('<option></option>').val(val).html(text));
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


$(document).ready(function()  {
    $("#enemyt").change(function(){
        var val = $(this).val();
        if (val =="caster"){ ACint -= 2; 
            console.log(ACint);
            ACint += 2;
        }else if (val =="controller"){
            ACint -= 1;
            console.log(ACint);
            ACint += 1;

        }



    });
});
//else if that will change based on enemy rank and update hp and to hit and all that.
$(document).ready(function()  {
    $("#rank").change(function(){
        var val = $(this).val();
        if (val =="e"){ mhp = 2;
            mcha = 2;
            ahp = 2;
            acha = 2;
            hitt = -3;
            savet = -3;
        }else if (val =="d"){
            mhp = 4;
            mcha = 4;
            ahp = 3;
            acha = 3;
            hitt = -2;
            savet = -2;

        }



    });
});