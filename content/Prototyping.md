[Prototyping Site](https://camerondpt.github.io/Form-Prototyper/)

Example text:
```clinical
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

header[Yellow Flag Screening]
button[PHQ-2/PHQ-9/OSPRO-YF/CSI/TSK]

section[Objective: TMJ Range of Motion and Palpation]

header[Resting Observation]
text[Facial Symmetry / Rest] button[Symmetrical] button[Asymmetrical] grid[3-5] text[Comment:] textbox[]
 
header[Range of Motion]
text[Opening - Pain-Free:] grid[2] number[3] text[mm] grid[3-5] text[Comment:] textbox[]
text[Opening - Max:] grid[2] number[3] text[mm] grid[3-5] text[Comment:] textbox[]
text[Opening - Max Assisted:] grid[2] number[3] text[mm] grid[3-5] text[Comment:] textbox[]
text[Lateral Excursion Left:] grid[2] number[3] text[mm] grid[3-5] text[Comment:] textbox[]
text[Lateral Excursion Right:] grid[2] number[3] text[mm] grid[3-5] text[Comment:] textbox[]
text[Protrusion:] grid[2] number[3] text[mm] grid[3-5] text[Comment:] textbox[]
text[Opening / Left excursion] grid[2] number[3] text[%] (calculated)
text[Opening / Right excursion] grid[2] number[3] text[%] (calculated)
 
header[Mandibular Movement Pattern]
text[Opening Pattern:] button[Straight/Deviation#deviate/Deflection#deflect]
text[Deviation]#deviate button[C curve (toward left)/C curve (toward right)/S curve (starting toward left)/S curve (starting toward right)]#deviate
text[Deflection]#deflect button[Left/Right]#deflect text[Severity]#deflect button[Mild/Moderate/Severe]#deflect
text[Movement Quality:] button[Smooth/Jittery/Guarded]
 
header[Joint Palpation with Movement]
text[Opening/Closing Left:] grid[2] neg_pos[Pain] neg_pos[Clicking] neg_pos[Crepitus] text[Notes:] textbox[25]
text[Opening/Closing Right:] grid[2] neg_pos[Pain] neg_pos[Clicking] neg_pos[Crepitus]  text[Notes:] textbox[25]
text[]
text[]
text[Lateral Excursion Left:] grid[2] neg_pos[Pain] neg_pos[Clicking] neg_pos[Crepitus] text[Notes:] textbox[25]
text[Lateral Excursion Right:] grid[2] neg_pos[Pain] neg_pos[Clicking] neg_pos[Crepitus]  text[Notes:] textbox[25]
 
header[Muscle Palpation]
text[Temporalis Left] grid[2] neg_pos[Local Pain] neg_pos[Referred Pain] neg_pos[Hypertonic] text[Notes:] textbox[25]
text[Temporalis Right] grid[2] neg_pos[Local Pain] neg_pos[Referred Pain] neg_pos[Hypertonic] text[Notes:] textbox[25]
text[]
text[]
text[Masseter Left] grid[2] neg_pos[Local Pain] neg_pos[Referred Pain] neg_pos[Hypertonic] text[Notes:] textbox[25]
text[Masseter Right] grid[2] neg_pos[Local Pain] neg_pos[Referred Pain] neg_pos[Hypertonic] text[Notes:] textbox[25]
 
header[Joint Mobility]
text[Distraction Left (Caudal Glide)] grid[2] button[Normal/Hypomobile/Hypermobile] neg_pos[Pain] neg_pos[Click] neg_pos[Crepitus]
text[Distraction Right (Caudal Glide)] grid[2] button[Normal/Hypomobile/Hypermobile] neg_pos[Pain] neg_pos[Click] neg_pos[Crepitus]
text[]
text[]
text[Anterior Glide Left] grid[2] button[Normal/Hypomobile/Hypermobile] neg_pos[Pain] neg_pos[Click] neg_pos[Crepitus]
text[Anterior Glide Right] grid[2] button[Normal/Hypomobile/Hypermobile] neg_pos[Pain] neg_pos[Click] neg_pos[Crepitus

 
section[Objective: Cervical Spine]

header[Posture]
text[Seated Posture:] textbox[]
text[Standing Posture:] textbox[]

header[Active Range of Motion]
text[Flexion:] grid[2] number[3] text[deg] grid[3-5] text[Comment:] textbox[]
text[Extension:] grid[2] number[3] text[deg] grid[3-5] text[Comment:] textbox[]
text[Right Side-bending:] grid[2] number[3] text[deg] grid[3-5] text[Comment:] textbox[]
text[Left Side-bending:] grid[2] number[3] text[deg] grid[3-5] text[Comment:] textbox[]
text[Right Rotation:] grid[2] number[3] text[deg] grid[3-5] text[Comment:] textbox[]
text[Left Rotation:] grid[2] number[3] text[deg] grid[3-5] text[Comment:] textbox[]

header[Muscle Palpation]
text[Paraspinals Left] grid[2] neg_pos[Local Pain] neg_pos[Referred Pain] neg_pos[Hypertonic] text[Notes:] textbox[25]
text[Paraspinals Right] grid[2] neg_pos[Local Pain] neg_pos[Referred Pain] neg_pos[Hypertonic] text[Notes:] textbox[25]
text[]
text[]
text[Suboccipitals Left] grid[2] neg_pos[Local Pain] neg_pos[Referred Pain] neg_pos[Hypertonic] text[Notes:] textbox[25]
text[Suboccipitals Right] grid[2] neg_pos[Local Pain] neg_pos[Referred Pain] neg_pos[Hypertonic] text[Notes:] textbox[25]
text[]
text[]
text[SCM Left] grid[2] neg_pos[Local Pain] neg_pos[Referred Pain] neg_pos[Hypertonic] text[Notes:] textbox[25]
text[SCM Right] grid[2] neg_pos[Local Pain] neg_pos[Referred Pain] neg_pos[Hypertonic] text[Notes:] textbox[25]
text[]
text[]
text[Scalenes Left] grid[2] neg_pos[Local Pain] neg_pos[Referred Pain] neg_pos[Hypertonic] text[Notes:] textbox[25]
text[Scalenes Right] grid[2] neg_pos[Local Pain] neg_pos[Referred Pain] neg_pos[Hypertonic] text[Notes:] textbox[25]
text[]
text[]
text[Submandibular muscles Left] grid[2] neg_pos[Local Pain] neg_pos[Referred Pain] neg_pos[Hypertonic] text[Notes:] textbox[25]
text[Submandibular muscles Right] grid[2] neg_pos[Local Pain] neg_pos[Referred Pain] neg_pos[Hypertonic] text[Notes:] textbox[25]
```