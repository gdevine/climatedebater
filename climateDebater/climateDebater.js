var storyContent = ﻿{"inkVersion":19,"root":[["\n","\n","\n","\n","\n",{"#":"author: many people"},{"#":"title: Climate Debater"},{"#":"version: 0.01"},{"->":"start"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"start":[["^Welcome to the Climage Debater v0.01.","\n","^During this game you will first be asked a few questions to identify your attitudes towards the debate.","\n","^Then if you belong to one of the groups we focused during the jam, you will be able to explore different narratives and find out how you can help yourself to other information.","\n",["ev",{"^->":"start.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Who created this?",{"->":"$r","var":true},null]}],["ev",{"^->":"start.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Let's start! ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"start.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","^Created over a game jam weekend, CD's aim is to transmit useful information about the climate debate.","\n",[["ev",{"^->":"start.0.c-0.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Are you spying on me?",{"->":"$r","var":true},null]}],["ev",{"^->":"start.0.c-0.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Let's start! ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"start.0.c-0.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^This software - which is open source (https://github.com/alpapan/climatedebater) - does not store or transmit any data to anyone.","\n","^It has no warranty or liability, implied or otherwise.","\n","^It is created for your amusement and hopefully you will find useful information as well.","\n",{"->":"start.0.g-0"},{"#f":5}],"c-1":["ev",{"^->":"start.0.c-0.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"->":"profiling"},"\n",{"->":"start.0.g-0"},{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"start.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],{"->":"profiling"},"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[["ev",{"^->":"start.0.g-0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Let's start! ",{"->":"$r","var":true},null]}],{"c-2":["ev",{"^->":"start.0.g-0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"->":"profiling"},"\n",{"#f":5}],"#f":5}]}],{"#f":1}],"profiling":[["^We're going to show you some images.","\n","^You may find some to be confronting, apologies but bear with us and try to choose the answer that is the closest to your initial thoughts .","\n",["ev",{"^->":"profiling.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Ok!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"profiling.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->t->":"greta"},{"->t->":"bluemountainbushfire"},{"->t->":"starvinglivestock"},{"->t->":"activism"},{"->t->":"coalpower"},{"->":"exploration"},{"#f":5}]}],{"#f":1}],"exploration":[[{"#":"CLEAR"},"^(Score A: ","ev",{"VAR?":"GROUPA"},"out","/ev","^; B: ","ev",{"VAR?":"GROUPB"},"out","/ev","^; C: ","ev",{"VAR?":"GROUPC"},"out","/ev","^; D: ","ev",{"VAR?":"GROUPD"},"out","/ev","^; E: ","ev",{"VAR?":"GROUPE"},"out","/ev","^; F: ","ev",{"VAR?":"GROUPF"},"out","/ev","^;)","\n","^This will be written based on results of previous answers but for the time being select one","\n",["ev",{"^->":"exploration.0.35.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":"denial.humanscanmakeit"},"!",{"CNT?":"denial.co2risingnoimpact.9.c-1"},"!","&&",{"CNT?":"denial.globalwarmingisnatural.20.c-1"},"!","&&",{"CNT?":"denial.humanimpactissmall.16.c-1"},"!","&&","/ev",{"*":".^.^.c-0","flg":3},{"s":["^Explore the myths of climate debate ",{"->":"$r","var":true},null]}],["ev",{"^->":"exploration.0.36.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":"positive_outcomes.0.c-4"},"!","/ev",{"*":".^.^.c-1","flg":3},{"s":["^Explore the positive outcomes from climate action ",{"->":"$r","var":true},null]}],["ev",{"^->":"exploration.0.37.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Explore how you can help yourself or people with actions ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"exploration.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.35.s"},[{"#n":"$r2"}],{"->t->":"denial"},{"->":".^.^.^"},"\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"exploration.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.36.s"},[{"#n":"$r2"}],{"->t->":"positive_outcomes"},{"->":".^.^.^"},"\n",{"->":".^.^.g-0"},{"#f":5}],"c-2":["ev",{"^->":"exploration.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.37.s"},[{"#n":"$r2"}],{"->t->":"help_people"},{"->":".^.^.^"},"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"reachout"},{"#f":5}]}],{"#f":3}],"error":["^shouldn't be here","\n","end",{"#f":1}],"help_people":[[{"#":"CLEAR"},"^Yes, we're also worried about climate change.","\n","^There seems to be so many things that we would be doing but it is all overwhelming.","\n","^Where do we even start?","\n",["ev",{"^->":"help_people.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Actually, I already do quite a bit but I want to help others do it too. How can I go about that?",{"->":"$r","var":true},null]}],["ev",{"^->":"help_people.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Yes, it's bad and I'm not sure I know which things I should focus on.",{"->":"$r","var":true},null]}],["ev",{"^->":"help_people.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^I don't really feel like I can do much. It's too overwhelming and I'm just one person!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"help_people.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"->":"helping_others"},{"#f":5}],"c-1":["ev",{"^->":"help_people.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":"enacting_change"},{"#f":5}],"c-2":["ev",{"^->":"help_people.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"\n",{"->":"climate_depression"},{"#f":5}]}],{"#f":1}],"reachout":[[{"#":"CLEAR"},"^Thank you for trying out our game.","\n","^If you found a bug, have questions, or want to reach out:","\n","^- Submit an Issue on GitHub (https://github.com/alpapan/climatedebater/issues)","\n","^- Reply to our Tweet (https://twitter.com/alpapan/status/1221999954584989697)","\n","^- Drop us a line (info@greenbluekats.com)","\n",["ev",{"^->":"reachout.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Conclude ",{"->":"$r","var":true},null]}],["ev",{"^->":"reachout.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Try again from the beginning.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"reachout.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],"\n","^Thank you participating in this interactive narrative.","\n","^If for any reason you are feeling depressed about this debate, please talk to someone or your GP.","\n","^If it is a crisis, reach out to LifeLine on 13 11 14.","\n","end",{"#f":5}],"c-1":["ev",{"^->":"reachout.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],"\n",{"#":"RESTART"},"end","ev","void","/ev","->->",{"#f":5}]}],{"#f":1}],"tunnel_as_thread":[{"temp=":"ret"},{"temp=":"tunnel"},[["ev",{"^->":"exploration"},"turns","/ev",{"temp=":"preTurnCount"},"\n",{"->t->":"tunnel","var":true},"ev",{"VAR?":"preTurnCount"},{"^->":"exploration"},"turns","==","/ev",[{"->":".^.b","c":true},{"b":["^ ","done",{"->":".^.^.^.14"},null]}],"nop","^ ",{"->":"ret","var":true},"\n",{"#f":5,"#n":"top"}],null],{"#f":1}],"greta":[["^What do you think about this image?","\n","^Pick one that applies to your first thoughts.","\n",{"#":"IMAGE: images/greta.jpg"},["ev",{"^->":"greta.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Role model for all kids",{"->":"$r","var":true},null]}],["ev",{"^->":"greta.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Snowflake",{"->":"$r","var":true},null]}],["ev",{"^->":"greta.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Who is that?",{"->":"$r","var":true},null]}],["ev",{"^->":"greta.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^Rebel who should leave these things for adults",{"->":"$r","var":true},null]}],["ev",{"^->":"greta.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^I don't know, I want to learn more",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"greta.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GROUPA"},1,"+",{"VAR=":"GROUPA","re":true},"/ev","ev",{"VAR?":"GROUPB"},1,"+",{"VAR=":"GROUPB","re":true},"/ev","ev",{"VAR?":"GROUPE"},1,"-",{"VAR=":"GROUPE","re":true},"/ev","ev",{"VAR?":"GROUPF"},1,"-",{"VAR=":"GROUPF","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"greta.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GROUPF"},1,"+",{"VAR=":"GROUPF","re":true},"/ev","ev",{"VAR?":"GROUPA"},1,"-",{"VAR=":"GROUPA","re":true},"/ev","ev",{"VAR?":"GROUPB"},1,"-",{"VAR=":"GROUPB","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-2":["ev",{"^->":"greta.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GROUPD"},1,"+",{"VAR=":"GROUPD","re":true},"/ev","ev",{"VAR?":"GROUPE"},1,"+",{"VAR=":"GROUPE","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-3":["ev",{"^->":"greta.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GROUPD"},1,"+",{"VAR=":"GROUPD","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-4":["ev",{"^->":"greta.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GROUPC"},1,"+",{"VAR=":"GROUPC","re":true},"/ev","ev",{"VAR?":"GROUPE"},1,"-",{"VAR=":"GROUPE","re":true},"/ev","ev",{"VAR?":"GROUPF"},1,"-",{"VAR=":"GROUPF","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"g-0":["ev","void","/ev","->->",{"#f":5}]}],{"#f":1}],"bluemountainbushfire":[["^What do you think about this image?","\n","^Pick one that applies to your first thoughts.","\n",{"#":"IMAGE: images/bmbushfire.jpg"},["ev",{"^->":"bluemountainbushfire.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Tragedy",{"->":"$r","var":true},null]}],["ev",{"^->":"bluemountainbushfire.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Just another bushfire",{"->":"$r","var":true},null]}],["ev",{"^->":"bluemountainbushfire.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Shameful",{"->":"$r","var":true},null]}],["ev",{"^->":"bluemountainbushfire.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^More funding for emergency services",{"->":"$r","var":true},null]}],["ev",{"^->":"bluemountainbushfire.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^I don't know, I want to learn more",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"bluemountainbushfire.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GROUPB"},1,"+",{"VAR=":"GROUPB","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"bluemountainbushfire.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GROUPD"},1,"+",{"VAR=":"GROUPD","re":true},"/ev","ev",{"VAR?":"GROUPE"},1,"+",{"VAR=":"GROUPE","re":true},"/ev","ev",{"VAR?":"GROUPF"},1,"+",{"VAR=":"GROUPF","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-2":["ev",{"^->":"bluemountainbushfire.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GROUPA"},1,"+",{"VAR=":"GROUPA","re":true},"/ev","ev",{"VAR?":"GROUPB"},1,"+",{"VAR=":"GROUPB","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-3":["ev",{"^->":"bluemountainbushfire.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GROUPB"},1,"+",{"VAR=":"GROUPB","re":true},"/ev","ev",{"VAR?":"GROUPD"},1,"+",{"VAR=":"GROUPD","re":true},"/ev","ev",{"VAR?":"GROUPE"},1,"-",{"VAR=":"GROUPE","re":true},"/ev","ev",{"VAR?":"GROUPA"},1,"-",{"VAR=":"GROUPA","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-4":["ev",{"^->":"bluemountainbushfire.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GROUPC"},1,"+",{"VAR=":"GROUPC","re":true},"/ev","ev",{"VAR?":"GROUPE"},1,"-",{"VAR=":"GROUPE","re":true},"/ev","ev",{"VAR?":"GROUPF"},1,"-",{"VAR=":"GROUPF","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"g-0":["ev","void","/ev","->->",{"#f":5}]}],{"#f":1}],"starvinglivestock":[["^What do you think about the following image?","\n","^Pick one that applies to your first thoughts.","\n",{"#":"IMAGE: images/sheepgrazing.jpg"},["ev",{"^->":"starvinglivestock.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^There goes our agriculture",{"->":"$r","var":true},null]}],["ev",{"^->":"starvinglivestock.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Nothing money can't solve",{"->":"$r","var":true},null]}],["ev",{"^->":"starvinglivestock.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^What happened?!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"starvinglivestock.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GROUPB"},1,"+",{"VAR=":"GROUPB","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"starvinglivestock.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GROUPD"},1,"+",{"VAR=":"GROUPD","re":true},"/ev","ev",{"VAR?":"GROUPF"},1,"+",{"VAR=":"GROUPF","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-2":["ev",{"^->":"starvinglivestock.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GROUPC"},1,"+",{"VAR=":"GROUPC","re":true},"/ev","ev",{"VAR?":"GROUPE"},1,"-",{"VAR=":"GROUPE","re":true},"/ev","ev",{"VAR?":"GROUPF"},1,"-",{"VAR=":"GROUPF","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"g-0":["ev","void","/ev","->->",{"#f":5}]}],{"#f":1}],"activism":[["^What do you think about this image?","\n","^Pick one that applies to your first thoughts.","\n",{"#":"IMAGE: images/activism.jpg"},["ev",{"^->":"activism.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Good for them",{"->":"$r","var":true},null]}],["ev",{"^->":"activism.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^How do I sign up?",{"->":"$r","var":true},null]}],["ev",{"^->":"activism.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^More self promotion!",{"->":"$r","var":true},null]}],["ev",{"^->":"activism.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^Organisations should support actions like these",{"->":"$r","var":true},null]}],["ev",{"^->":"activism.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^Drop in the ocean",{"->":"$r","var":true},null]}],["ev",{"^->":"activism.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":18},{"s":["^I don't know, I want to learn more",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"activism.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GROUPB"},1,"+",{"VAR=":"GROUPB","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"activism.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GROUPA"},1,"+",{"VAR=":"GROUPA","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-2":["ev",{"^->":"activism.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GROUPF"},1,"+",{"VAR=":"GROUPF","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-3":["ev",{"^->":"activism.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GROUPB"},1,"+",{"VAR=":"GROUPB","re":true},"/ev","ev",{"VAR?":"GROUPD"},1,"+",{"VAR=":"GROUPD","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-4":["ev",{"^->":"activism.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GROUPE"},1,"+",{"VAR=":"GROUPE","re":true},"/ev","ev",{"VAR?":"GROUPF"},1,"+",{"VAR=":"GROUPF","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-5":["ev",{"^->":"activism.0.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GROUPC"},1,"+",{"VAR=":"GROUPC","re":true},"/ev","ev",{"VAR?":"GROUPE"},1,"-",{"VAR=":"GROUPE","re":true},"/ev","ev",{"VAR?":"GROUPF"},1,"-",{"VAR=":"GROUPF","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"g-0":["ev","void","/ev","->->",{"#f":5}]}],{"#f":1}],"coalpower":[["^What do you think about this image?","\n","^Pick one that applies to your first thoughts.","\n",{"#":"IMAGE: images/coalpower.jpg"},["ev",{"^->":"coalpower.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Government should invest in renewables",{"->":"$r","var":true},null]}],["ev",{"^->":"coalpower.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^I will switch to green energy",{"->":"$r","var":true},null]}],["ev",{"^->":"coalpower.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^We need cheap energy",{"->":"$r","var":true},null]}],["ev",{"^->":"coalpower.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^Expensive, polluting, but necessary right now",{"->":"$r","var":true},null]}],["ev",{"^->":"coalpower.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^I don't know, I want to learn more",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"coalpower.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GROUPB"},1,"+",{"VAR=":"GROUPB","re":true},"/ev","ev",{"VAR?":"GROUPE"},1,"-",{"VAR=":"GROUPE","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"coalpower.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GROUPA"},1,"+",{"VAR=":"GROUPA","re":true},"/ev","ev",{"VAR?":"GROUPE"},1,"-",{"VAR=":"GROUPE","re":true},"/ev","ev",{"VAR?":"GROUPF"},1,"-",{"VAR=":"GROUPF","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-2":["ev",{"^->":"coalpower.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GROUPF"},1,"+",{"VAR=":"GROUPF","re":true},"/ev","ev",{"VAR?":"GROUPB"},1,"-",{"VAR=":"GROUPB","re":true},"/ev","ev",{"VAR?":"GROUPC"},1,"-",{"VAR=":"GROUPC","re":true},"/ev","ev",{"VAR?":"GROUPE"},1,"-",{"VAR=":"GROUPE","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-3":["ev",{"^->":"coalpower.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GROUPC"},1,"+",{"VAR=":"GROUPC","re":true},"/ev","ev",{"VAR?":"GROUPD"},1,"+",{"VAR=":"GROUPD","re":true},"/ev","ev",{"VAR?":"GROUPE"},1,"-",{"VAR=":"GROUPE","re":true},"/ev","ev",{"VAR?":"GROUPB"},1,"-",{"VAR=":"GROUPB","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-4":["ev",{"^->":"coalpower.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GROUPC"},1,"+",{"VAR=":"GROUPC","re":true},"/ev","ev",{"VAR?":"GROUPE"},1,"-",{"VAR=":"GROUPE","re":true},"/ev","ev",{"VAR?":"GROUPF"},1,"-",{"VAR=":"GROUPF","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"g-0":["ev","void","/ev","->->",{"#f":5}]}],{"#f":1}],"denial":[["^Let's explore some opinions around the climate change debate.","\n",["ev",{"^->":"denial.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^CO2 is not actually increasing. ",{"->":"$r","var":true},null]}],["ev",{"^->":"denial.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^CO2 increasing has little impact on climate ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"denial.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"->t->":"denial.co2notrising"},"\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"denial.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"->t->":"denial.co2risingnoimpact"},"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["ev","void","/ev","->->",{"#f":5}]}],{"co2notrising":["^Fringe case.","\n","^Show Mauna Loa observatory data","\n","^There are companies that sell industrial equipment for this and they are very precise and Swiss and…. On youtube!","\n",{"#":"YOUTUBE:ONtHGdP9mow"},"^You can even buy a sensor for your fishtank","\n",{"#":"YOUTUBE:An_A2XnI6IQ"},"^Long story short, there’s no magic here: we can measure this using home aquarium kit and the numbers do not lie.","\n",[["ev",{"^->":"denial.co2notrising.12.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Well, CO2 may be rising but it has no <i>real</i> impact on the climate ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"denial.co2notrising.12.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"->":"denial.co2risingnoimpact"},"\n",{"#f":5}]}],{"#f":1}],"co2risingnoimpact":["^Land temperature data evidence for warming","\n","^Ocean data - takes a lot more energy to heat up an ocean than air (how much does swimming pool heating cost versus aircon… a lot)","\n","^We know this from first principles - more CO2 causes more energy absorbtion of emitted UV (maybe get a youtube with Tim Schmidt? If not maybe this:","\n",{"#":"YOUTUBE:sTvqIijqvTg)"},"^(Could maybe have a detour to naked planet models for more nerdy / numerate types?)","\n",[["ev",{"^->":"denial.co2risingnoimpact.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Even if there is warming, it is due to natural causes ",{"->":"$r","var":true},null]}],["ev",{"^->":"denial.co2risingnoimpact.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Ok, I see now ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"denial.co2risingnoimpact.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"->":"denial.globalwarmingisnatural"},"\n",{"#f":5}],"c-1":["ev",{"^->":"denial.co2risingnoimpact.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"->":"exploration"},"\n",{"#f":5}]}],{"#f":1}],"globalwarmingisnatural":["^This is a bit like a murder mystery. Who are the suspects?","\n","^Volcanos: no evidence of any change here. We would notice.","\n","^See https://www.theguardian.com/environment/2019/may/30/humans-and-volcanoes-caused-nearly-all-of-global-heating-in-past-140-years","\n","^Oceans and biosphere combusting more (maybe, but bushfires and permafrost melt seem to be driven by warming, not vice versa plus why all the warming so far when we’ve only just seen the fires pick up recently?)","\n","^Slowdown of sedimentary rock formation: Once again, no evidence. Ruled out plus its too damn slow to explain rapid change.","\n","^See https://earthobservatory.nasa.gov/features/CarbonCycle/page2.php","\n","^Sunspots / changes in solar output: We measure this and it can’t explain the level of radiative forcing and temperature change.","\n","^See https://climate.nasa.gov/blog/2910/what-is-the-suns-role-in-climate-change/","\n",{"#":"IMAGE:images/temperature_vs_solar.jpg"},"^So, if its not natural it must be us. Moving Gigatons of material around isn’t something you can do sneakily - its billions of tons.","\n",{"#":"YOUTUBE:sKDWW9WlPSc"},[["ev",{"^->":"denial.globalwarmingisnatural.20.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Well, actually even if the warming cannot be explained by natural causes, the human impact is small, and the impact of continued greenhouse gas emissions will be minor. ",{"->":"$r","var":true},null]}],["ev",{"^->":"denial.globalwarmingisnatural.20.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Ok, I see now ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"denial.globalwarmingisnatural.20.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"->":"denial.humanimpactissmall"},"\n",{"#f":5}],"c-1":["ev",{"^->":"denial.globalwarmingisnatural.20.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"->":"exploration"},"\n",{"#f":5}]}],{"#f":1}],"humanimpactissmall":["^The warming we have experienced thus far is small and yet in Australia we are experiencing:","\n","^Drought / Aus specific stuff","\n",{"#":"YOUTUBE:jIy0t5P0CUQ"},"^Extreme temperatures","\n","^Declining agricultural production","\n","^Heat stress","\n","^Increased costs for households from air conditioning, mitigating impacts of fires, floods, higher food costs.","\n",{"#":"YOUTUBE:KeX7x5NtNFg"},"^Remember - this is for ~1 degree so far and business as usual cases now indicate 3C is likely. If you had 5 drinks at the pub and felt a bit ill then 15 probably isn’t a good idea. This gets down to another problem: the impacts are not linear. Just like with drinking, 1 drink is fine, 3 is not ok to drive and 30 will probably kill you. We can’t assume that this is going to be a smooth or predictable process as we push it further and further. [maybe joke about calling a cab here - just seems most people eat and drink so these are the most accessible analogies]","\n",[["ev",{"^->":"denial.humanimpactissmall.16.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Whether or not the changes are going to be good for us, humans are very adept at adapting to changes; besides, it's too late to do anything about it, and/or a technological fix is bound to come along when we really need it ",{"->":"$r","var":true},null]}],["ev",{"^->":"denial.humanimpactissmall.16.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Ok, I see now ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"denial.humanimpactissmall.16.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"->":"denial.humanscanmakeit"},"\n",{"#f":5}],"c-1":["ev",{"^->":"denial.humanimpactissmall.16.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"->":"exploration"},"\n",{"#f":5}]}],{"#f":1}],"humanscanmakeit":["^Two things:","\n","^The fix has come along. We have cheap renewables and can transition. We can afford it [link back to all the benefits of climate mitigation elsewhere on the site]","\n",{"#":"YOUTUBE:Jc4wDL16-hU"},"^Why not do it now? Its not like interest rates are high or we can’t afford it.","\n","^“Humans are adept at adapting”: this is like a 37yo with dad bod saying “hold my beer while I hit the half pipe” - we literally have no idea how this will pan out because we have not seen anything like it before. We do not have any prior examples of humans managing major climate change because it hasn’t happened. [link to Jared Diamond / fossil record data talks - will dig some up]","\n",[["ev",{"^->":"denial.humanscanmakeit.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^No, I don't agree but let's see what else you have to say",{"->":"$r","var":true},null]}],["ev",{"^->":"denial.humanscanmakeit.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^No, I'm not convinced, I'll have to read more but in meantime let's agree to disagree",{"->":"$r","var":true},null]}],["ev",{"^->":"denial.humanscanmakeit.9.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Ok, I see now",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"denial.humanscanmakeit.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GROUPF"},1,"+",{"VAR=":"GROUPF","re":true},"/ev",{"->":"exploration"},{"#f":5}],"c-1":["ev",{"^->":"denial.humanscanmakeit.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GROUPC"},1,"+",{"VAR=":"GROUPC","re":true},"/ev","ev",{"VAR?":"GROUPD"},1,"+",{"VAR=":"GROUPD","re":true},"/ev",{"->":"exploration"},{"#f":5}],"c-2":["ev",{"^->":"denial.humanscanmakeit.9.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"exploration"},{"#f":5}]}],{"#f":1}],"#f":1}],"helping_others":[["^Some text","\n",["ev","void","/ev","->->",{"#f":5,"#n":"g-0"}],null],{"#f":1}],"enacting_change":[["^something","\n",["ev","void","/ev","->->",{"#f":5,"#n":"g-0"}],null],{"#f":1}],"climate_depression":[["^1 >","\n","^2 >","\n","^3 >","\n","^So you considered recycling and reusing and cut down your electricity usage but it didn't do anything right?","\n","^You go outside and there's trash on the ground and a traffic congestion outside of your window.","\n","^The internet tells you you should turn vegeterian, or better yet vegan, to ride your bicycle everywhere,","\n","^to donate to environmental charities. But, you like meat and veggie meals are bland, you work too far","\n","^to cycle and there is no train line and money is scarce.","\n",["ev","void","/ev","->->",{"#f":5,"#n":"g-0"}],null],{"#f":1}],"positive_outcomes":[[["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^The debate around climate change is often negative or framed as one team versus another. ",{"->":".^.^.17"},null],"s1":["pop","^ ",{"->":".^.^.17"},null],"#f":5}],"\n",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^Another way to look at it, is to consider what are the direct benefits for adopting some of the policies supported by climate scientists even if the climate never changes. ",{"->":".^.^.17"},null],"s1":["pop","^ ",{"->":".^.^.17"},null],"#f":5}],"\n",["ev","visit",4,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"ev","du",4,"==","/ev",{"->":".^.s4","c":true},"nop",{"s0":["pop","^For example, we can consider the benefits for reducing pollution, producing and using energy more efficiently, making the economy more efficient and self-reliant, or even guarding our health and that of our family. ",{"->":".^.^.35"},null],"s1":["pop","^ What else shall we explore? ",{"->":".^.^.35"},null],"s2":["pop","^ What would you like to consider next? ",{"->":".^.^.35"},null],"s3":["pop","^ What else shall we explore? ",{"->":".^.^.35"},null],"s4":["pop","^ ",{"->":"reachout"},{"->":".^.^.35"},null],"#f":5}],"\n",["ev",{"^->":"positive_outcomes.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Actually, I do care about pollution ",{"->":"$r","var":true},null]}],["ev",{"^->":"positive_outcomes.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Having a robust economy is always important, let's explore this! ",{"->":"$r","var":true},null]}],["ev",{"^->":"positive_outcomes.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Let's do consider energy for a moment ",{"->":"$r","var":true},null]}],["ev",{"^->":"positive_outcomes.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^I do want to learn about health ",{"->":"$r","var":true},null]}],["ev",{"^->":"positive_outcomes.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^I'm good, thanks ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"positive_outcomes.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],{"->t->":".^.^.^.pollution"},{"->":".^.^.^"},"\n",{"#f":5}],"c-1":["ev",{"^->":"positive_outcomes.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],{"->t->":".^.^.^.economy"},{"->":".^.^.^"},"\n",{"#f":5}],"c-2":["ev",{"^->":"positive_outcomes.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],{"->t->":".^.^.^.energy"},{"->":".^.^.^"},"\n",{"#f":5}],"c-3":["ev",{"^->":"positive_outcomes.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],{"->t->":".^.^.^.health"},{"->":".^.^.^"},"\n",{"#f":5}],"c-4":["ev",{"^->":"positive_outcomes.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],{"->":"exploration"},"\n",{"#f":5}]}],{"pollution":[[["ev","void","/ev","->->",{"#f":5,"#n":"g-0"}],null],{"#f":1}],"economy":[[["ev","void","/ev","->->",{"#f":5,"#n":"g-0"}],null],{"#f":1}],"energy":[[["ev","void","/ev","->->",{"#f":5,"#n":"g-0"}],null],{"#f":1}],"health":[["^One of the greatest health concerns scientists have with a changing climate is air pollution. So addressing this wi....","\n","^As bush fires become a common occurrence, so too will looming clouds of smoke over Australian city skylines. Converting some of the most liveable cities in the world to places whose air quality is on par with the smog covered and crowded city of New Dehli, India. But what exactly are the health effects of continually breathing in smoke, and what can we do to protect ourselves?","\n","^Similar to the smoke that comes from a car exhaust, bush fire smoke not only contains carbon dioxide, carbon monoxide and nitrogen gases, but also is full of unburnt microscopic particles 1/30th the size of a human hair.","\n","^Often labelled as PM2.5 or soot, their small size lets them easily enter your airways, getting stuck deep in your lungs and entering your bloodstream. Because of this the current belief is that there is no safe level of PM2.5 exposure, with side effects ranging from slight difficulty breathing to long term cardiovascular and repertory issues severely reducing the quality and length of life.","\n","^These issues are not too prevalent if smoke and smog levels are kept to a minimum, which can be done by reducing our reliance on petrol and coal, but if the levels of smoke seen by Sydney, Melbourne and Canberra become common place, more stress will be placed on the already packed medical system.","\n",["ev","void","/ev","->->",{"#f":5,"#n":"g-0"}],null],{"#f":1}],"#f":1}],"global decl":["ev",0,{"VAR=":"GROUPA"},0,{"VAR=":"GROUPB"},0,{"VAR=":"GROUPC"},0,{"VAR=":"GROUPD"},0,{"VAR=":"GROUPE"},0,{"VAR=":"GROUPF"},"/ev","end",null],"#f":1}],"listDefs":{}};