[Prototyping Site](https://camerondpt.github.io/Form-Prototyper/)

Example text:
```
section[Subjective: Baseline & History]
header[Primary Symptoms & Irritability]
text[Primary Complaint] button[Jaw pain/Facial pain/Neck pain/Headache/Earache/Tinnitus/Dizziness/Locking/Chewing difficulty]
text[Pain Intensity (0-10)] text[Current:] number[2] text[Best:] number[2] text[Worst:] number[2]

header[Habits]
text[Aggravating Factors] button[Brushing teeth/Chewing hard food/Chewing soft food/Computer work/Prolonged sitting/Singing/Talking/Yawning]
text[Easing Factors] button[Heat/Ice/Manual pressure/Medication/Mouthguard/NSAIDs/Rest/Soft diet/Splint]
text[Parafunctional Habits] button[Biting (nails, cheeks)/Bruxism/Chewing gum/Clenching]

header[Psychosocial Screening]
text[CSI Score:] number[3] text[PHQ-4:] number[2] text[NDI:] number[3]

section[Subjective: Specific TMD Symptoms]
header[Joint Noises]
text[Are joint noises present?] button[Yes/No]
text[Noise Type:] button[Clicking\/Popping/Grinding\/Crepitus]
text[Timing of Noise:] button[Opening/Closing]

header[Locking & Catching]
text[Jaw catches or locks?] neg_pos[Left] neg_pos[Right]
text[Position of Lock:] button[Locks Open] button[Locks Closed]
text[Requires manual unlock?] neg_pos[Manual Unlock Needed]

header[Function & Secondary Symptoms]
text[Pain modified by jaw function?] neg_pos[Function Modifies Pain]
text[Headaches present?] neg_pos[Headaches] checkbox[Triggered by chewing]
text[Use of Oral Appliance?] neg_pos[Wears Appliance] button[Improves Sx] button[Worsens Sx]

section[Objective: Range of Motion]
header[Observation]
text[Facial Symmetry / Rest] button[Symmetrical] button[Asymmetrical] grid[4] text[Comment:] textbox[20]

header[Range of Motion]
text[Opening - Pain-Free:] grid[2] number[3] text[mm] grid[3-5] text[Comment:] textbox[]
text[Opening - Max:] grid[2] number[3] text[mm] grid[3-5] text[Comment:] textbox[]
text[Opening - Max Assisted:] grid[2] number[3] text[mm] grid[3-5] text[Comment:] textbox[]
text[Lateral Excursion Left:] grid[2] number[3] text[mm] grid[3-5] text[Comment:] textbox[]
text[Lateral Excursion Right:] grid[2] number[3] text[mm] grid[3-5] text[Comment:] textbox[]
text[Protrusion:] grid[2] number[3] text[mm] grid[3-5] text[Comment:] textbox[]

header[Mandibular Movement Pattern]
text[Opening Pattern:] button[Straight] button[Deviation (C or S Curve)] button[Deflection]

header[Palpation & Joint Sounds]
text[Masseter] neg_pos[Pain (L)] neg_pos[Pain (R)] neg_pos[Trigger Pt (L)] neg_pos[Trigger Pt (R)]
text[Temporalis] neg_pos[Pain (L)] neg_pos[Pain (R)] neg_pos[Trigger Pt (L)] neg_pos[Trigger Pt (R)]
text[TMJ Lateral Pole] neg_pos[Pain (L)] neg_pos[Pain (R)]
text[Joint Sounds Palpated] checkbox[Click (L)] checkbox[Click (R)] checkbox[Crepitus (L)] checkbox[Crepitus (R)]

header[Accessory Motion / Joint Play]
text[Distraction (Caudal Glide)] button[Normal] button[Hypomobile] button[Hypermobile] neg_pos[Pain]
text[Anterior Glide] button[Normal] button[Hypomobile] button[Hypermobile] neg_pos[Pain]

section[Objective: Cervical Spine]
header[Posture & Active Range of Motion]
text[Cervical Posture:] checkbox[Forward Head] checkbox[Upper Cerv Ext] checkbox[Elevated Shoulders]
text[Flexion:] grid[2] number[3] text[deg] grid[3-5] text[Comment:] textbox[]
text[Extension:] grid[2] number[3] text[deg] grid[3-5] text[Comment:] textbox[]
text[Right Rotation:] grid[2] number[3] text[deg] grid[3-5] text[Comment:] textbox[]
text[Left Rotation:] grid[2] number[3] text[deg] grid[3-5] text[Comment:] textbox[]
text[Right Side-bending:] grid[2] number[3] text[deg] grid[3-5] text[Comment:] textbox[]
text[Left Side-bending:] grid[2] number[3] text[deg] grid[3-5] text[Comment:] textbox[]

header[Special Tests]
text[Flexion-Rotation Test] neg_pos[Positive (L)] neg_pos[Positive (R)]
text[Craniocervical Flexion Test] text[Target Held:] number[2] text[mmHg]
text[Deep Cervical Flexor Endurance] text[Time Held:] number[3] text[seconds]

header[Cervical Palpation & Mobility]
text[Suboccipitals] neg_pos[Pain (L)] neg_pos[Pain (R)] neg_pos[Referred (L)] neg_pos[Referred (R)]
text[Upper Trap / Levator Scap] neg_pos[Pain (L)] neg_pos[Pain (R)] neg_pos[Trigger Pt (L)] neg_pos[Trigger Pt (R)]
text[Upper Cervical (C0-C3)] button[Normal] button[Hypomobile] button[Hypermobile] neg_pos[Pain]

section[Assessment & Plan]
header[Clinical Stratification]
text[Primary TMD Driver] button[Arthrogenic] button[Myogenic] button[Neurogenic/Central] button[Mixed]
paragraph[Diagnostic Narrative & Prognosis]
paragraph[Plan of Care / Interventions]
```
