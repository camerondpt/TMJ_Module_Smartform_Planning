
You can copy this text (button at top right of code block) and paste it into the [Prototyping Site](https://camerondpt.github.io/Form-Prototyper/).

``` clinical
section[Subjective: Baseline & History]
 
header[Primary Symptoms & Irritability]
paragraph[Narrative History of Symptoms]
text[Primary Complaint]button[Pain#painNRS/Headache#HeadacheFD/Tinnitus/Dizziness#dizzinessNRS/Locking\/Catching#subjlocking/Joint Noises#subjJointNoise/Difficulty Chewing]
text[Pain Intensity]#painNRS text[Current:]#painNRS number[2]#painNRS text[Best:]#painNRS number[2]#painNRS text[Worst:]#painNRS number[2]#painNRS text[Location:]#painNRS textbox[30]#painNRS
text[Headaches Occur: ]#HeadacheFD number[2]#HeadacheFD text[times per]#HeadacheFD button[day/week/month/year]#HeadacheFD text[Avg Duration]#HeadacheFD number[2]#HeadacheFD button[min/hrs/days]#HeadacheFD
text[Headache Location:]#HeadacheFD textbox[30]#HeadacheFD
text[Catching/locking: Side(s) Involved]#subjlocking neg_pos[Left]#subjlocking neg_pos[Right]#subjlocking
text[Position of Lock:]#subjlocking button[Locks Open]#subjlocking button[Locks Closed]#subjlocking
text[Requires manual unlock?]#subjlocking button[Yes/No]#subjlocking
text[Noise Type:]#subjJointNoise button[Clicking\/Popping/Grinding\/Crepitus]#subjJointNoise
text[Timing of Noise:]#subjJointNoise button[Opening/Closing]#subjJointNoise
 
header[Habits]
text[Aggravating Factors] button[Brushing teeth/Chewing hard food/Chewing soft food/Computer work/Prolonged sitting/Singing/Talking/Yawning]
text[Easing Factors] button[Heat/Ice/Manual pressure/Medication/Mouthguard/NSAIDs/Rest/Soft diet/Splint]
text[Parafunctional Habits] button[Biting (nails, cheeks)/Bruxism/Chewing gum/Clenching]
 
header[Yellow Flags Present]
button[Anxiety/Depression/High Threat Appraisal/Movement\/Protective Guarding/Multi-system Sensitivity]
```
