You can copy this text (button at top right of code block) and paste it into the [Prototyping Site](https://camerondpt.github.io/Form-Prototyper/).

``` clinical

section[Objective: TMJ Range of Motion and Palpation]
 
header[Resting Observation]
text[Facial Symmetry / Rest] button[Symmetrical] button[Asymmetrical] grid[3-5] text[Notes: ] textbox[]
 
header[Range of Motion]
text[Opening - Pain-Free:] grid[2] number[3] text[mm] grid[3-5] text[Notes: ] textbox[]
text[Opening - Max:] grid[2] number[3] text[mm] grid[3-5] text[Notes: ] textbox[]
text[Opening - Max Assisted:] grid[2] number[3] text[mm] grid[3-5] text[Notes: ] textbox[]
text[Lateral Excursion Left:] grid[2] number[3] text[mm] grid[3-5] text[Notes: ] textbox[]
text[Lateral Excursion Right:] grid[2] number[3] text[mm] grid[3-5] text[Notes: ] textbox[]
text[Protrusion:] grid[2] number[3] text[mm] grid[3-5] text[Notes: ] textbox[]
text[Retrusion:] grid[2] number[3] text[mm] grid[3-5] text[Notes: ] textbox[]
text[Opening / Left excursion] grid[2] number[3] text[%] (calculated)
text[Opening / Right excursion] grid[2] number[3] text[%] (calculated)
 
header[Mandibular Movement Pattern]
text[Opening Pattern:] button[Straight/Deviation#deviate/Deflection#deflect]
text[Deviation]#deviate button[C curve (toward left)/C curve (toward right)/S curve (starting toward left)/S curve (starting toward right)]#deviate
text[Deflection]#deflect button[Left/Right]#deflect text[Severity]#deflect button[Mild/Moderate/Severe]#deflect
text[Movement Quality:] button[Smooth/Jittery/Guarded] text[Notes: ] textbox[]
 
header[Joint Palpation with Movement]
text[Opening/Closing Left:] grid[2-5] neg_pos[Pain] neg_pos[Clicking] neg_pos[Crepitus] text[Notes: ] textbox[]
text[Opening/Closing Right:] grid[2-5] neg_pos[Pain] neg_pos[Clicking] neg_pos[Crepitus]  text[Notes: ] textbox[]
text[]
text[]
text[Lateral Excursion Left:] grid[2-5] neg_pos[Pain] neg_pos[Clicking] neg_pos[Crepitus] text[Notes: ] textbox[]
text[Lateral Excursion Right:] grid[2-5] neg_pos[Pain] neg_pos[Clicking] neg_pos[Crepitus]  text[Notes: ] textbox[]
 
header[Muscle Palpation]
text[Temporalis Left] grid[2-5] neg_pos[Pain] neg_pos[Hypertonic] text[Notes: ] textbox[]
text[Temporalis Right] grid[2-5] neg_pos[Pain] neg_pos[Hypertonic] text[Notes: ] textbox[]
text[]
text[]
text[Masseter Left] grid[2-5] neg_pos[Pain] neg_pos[Hypertonic] text[Notes: ] textbox[]
text[Masseter Right] grid[2-5] neg_pos[Pain] neg_pos[Hypertonic] text[Notes: ] textbox[]
text[]
text[]
text[Pterygoids Left] grid[2-5] neg_pos[Pain] neg_pos[Hypertonic] text[Notes: ] textbox[]
text[Pterygoids Right] grid[2-5] neg_pos[Pain] neg_pos[Hypertonic] text[Notes: ] textbox[]
paragraph[Facial muscle palpation: notes]
 
header[Joint Mobility]
text[Distraction (Caudal Glide) Left] grid[2-5] button[Normal/Hypomobile/Hypermobile] neg_pos[Pain] text[Notes: ] textbox[]
text[Distraction (Caudal Glide) Right] grid[2-5] button[Normal/Hypomobile/Hypermobile] neg_pos[Pain] text[Notes: ] textbox[]
text[Cranial Glide Left] grid[2-5] button[Normal/Hypomobile/Hypermobile] neg_pos[Pain] text[Notes: ] textbox[]
text[Cranial Glide Right] grid[2-5] button[Normal/Hypomobile/Hypermobile]neg_pos[Pain] text[Notes: ] textbox[]
text[Medial transverse Left] grid[2-5] button[Normal/Hypomobile/Hypermobile] neg_pos[Pain] text[Notes: ] textbox[]
text[Medial transverse Right] grid[2-5] button[Normal/Hypomobile/Hypermobile]neg_pos[Pain] text[Notes: ] textbox[]
text[Lateral transverse Left] grid[2-5] button[Normal/Hypomobile/Hypermobile] neg_pos[Pain] text[Notes: ] textbox[]
text[Lateral transverse Right] grid[2-5] button[Normal/Hypomobile/Hypermobile]neg_pos[Pain] text[Notes: ] textbox[]
text[Anterior-posterior Left] grid[2-5] button[Normal/Hypomobile/Hypermobile] neg_pos[Pain] text[Notes: ] textbox[]
text[Anterior-posterior Right] grid[2-5] button[Normal/Hypomobile/Hypermobile]neg_pos[Pain] text[Notes: ] textbox[]
text[Posterior-anterior Left] grid[2-5] button[Normal/Hypomobile/Hypermobile] neg_pos[Pain] text[Notes: ] textbox[]
text[Posterior-anterior Right] grid[2-5] button[Normal/Hypomobile/Hypermobile]neg_pos[Pain] text[Notes: ] textbox[]

header[Special Tests]
text[Cotton ball / Depressor Test: ] 
text[Left Bite: ] grid[2-5] neg_pos[Ipsilateral Pain] neg_pos[Contralateral Pain]
text[Right Bite: ] grid[2-5] neg_pos[Ipsilateral Pain] neg_pos[Contralateral Pain]


section[Objective: Neuro Screen]
text[(LANSS) Questionnaire] grid[2-5] text[Score: ] number[2] text[Interpretation: ] textbox[]
text[]
text[]

header[Neurodynamics]
text[Trigeminal (V)] grid[2-5] neg_pos[TTP] neg_pos[Neurodynamics] text[Notes: ] textbox[]
text[Facial (VII) ] grid[2-5] neg_pos[TTP] neg_pos[Neurodynamics] text[Notes: ] textbox[]

header[Reflex Testing]
text[Trigeminal (CNV) assessment: ] button[Absent (0)/Trace (1+)/Normal (2+)/Brisk (3+)/Clonus (4+)]

header[Sensory Testing] 
button[Thermal#thermal/Mechanical#mechanical/Vibration#vibration/PPT#PPT]
text[Thermal Testing:]#thermal grid[2-5] button[normal/abnormal]#thermal text[Notes: ]#thermal textbox[]#thermal
text[Light Touch]#mechanical grid[2-5] button[normal/abnormal]#mechanical text[Notes: ]#mechanical textbox[]#mechanical
text[Monofilament]#mechanical grid[2-5] button[normal/abnormal]#mechanical text[Notes: ]#mechanical textbox[]#mechanical
text[Sharp/dull]#mechanical grid[2-5] button[normal/abnormal]#mechanical text[Notes: ]#mechanical textbox[]#mechanical
text[Two-point discrimination]#mechanical grid[2-5] button[normal/abnormal]#mechanical text[Notes: ]#mechanical textbox[]#mechanical
text[Vibration]#vibration grid[2-5] button[normal/abnormal]#vibration text[Notes: ]#vibration textbox[]#vibration
text[Pain-pressure Threshold]#PPT grid[2-5] button[normal/abnormal]#PPT text[Notes: ]#PPT textbox[]#PPT

paragraph[Neuro Screen: Additional Details]


section[Objective: Cervical Spine]
 
header[Posture]
text[Seated Posture:] textbox[]
text[Standing Posture:] textbox[]
 
header[Active Range of Motion]
text[Flexion:] grid[2] number[3] text[deg] grid[3-5] text[Notes: ] textbox[]
text[Extension:] grid[2] number[3] text[deg] grid[3-5] text[Notes: ] textbox[]
text[Right Side-bending:] grid[2] number[3] text[deg] grid[3-5] text[Notes: ] textbox[]
text[Left Side-bending:] grid[2] number[3] text[deg] grid[3-5] text[Notes: ] textbox[]
text[Right Rotation:] grid[2] number[3] text[deg] grid[3-5] text[Notes: ] textbox[]
text[Left Rotation:] grid[2] number[3] text[deg] grid[3-5] text[Notes: ] textbox[]
 
header[Muscle Palpation]
text[Paraspinals Left] grid[2-5] neg_pos[Pain] neg_pos[Hypertonic] text[Notes: ] textbox[]
text[Paraspinals Right] grid[2-5] neg_pos[Pain] neg_pos[Hypertonic] text[Notes: ] textbox[]
text[]
text[]
text[Suboccipitals Left] grid[2-5] neg_pos[Pain] neg_pos[Hypertonic] text[Notes: ] textbox[]
text[Suboccipitals Right] grid[2-5] neg_pos[Pain] neg_pos[Hypertonic] text[Notes: ] textbox[]
text[]
text[]
text[SCM Left] grid[2-5] neg_pos[Pain] neg_pos[Hypertonic] neg_pos[Tinnitus/Fullness] text[Notes: ] textbox[]
text[SCM Right] grid[2-5] neg_pos[Pain] neg_pos[Hypertonic] neg_pos[Tinnitus/Fullness] text[Notes: ] textbox[]
text[]
text[]
text[Scalenes Left] grid[2-5] neg_pos[Pain] neg_pos[Hypertonic] text[Notes: ] textbox[]
text[Scalenes Right] grid[2-5] neg_pos[Pain] neg_pos[Hypertonic] text[Notes: ] textbox[]
text[]
text[]
text[Upper Trapezius Left] grid[2-5] neg_pos[Pain] neg_pos[Hypertonic] text[Notes: ] textbox[]
text[Upper Trapezius Right] grid[2-5] neg_pos[Pain] neg_pos[Hypertonic] text[Notes: ] textbox[]
text[]
text[]
text[Submandibular muscles Left] grid[2-5] neg_pos[Pain] neg_pos[Hypertonic] text[Notes: ] textbox[]
text[Submandibular muscles Right] grid[2-5] neg_pos[Pain] neg_pos[Hypertonic] text[Notes: ] textbox[]
paragraph[Cervical muscle palpation: notes]

header[Cervical Joint Mobility]
text[Atlanto-Occipital (AO)] grid[2-5] button[normal/hypomobile/hypermobile] text[Notes: ] textbox[]
text[Upper Cervical Spine (C1-4)] grid[2-5] button[normal/hypomobile/hypermobile] text[Notes: ] textbox[]
text[Upper Cervical Spine (C4-7)] grid[2-5] button[normal/hypomobile/hypermobile] text[Notes: ] textbox[]

```