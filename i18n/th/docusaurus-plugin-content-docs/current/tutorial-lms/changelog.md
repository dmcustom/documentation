# ประวัติการอัพเดท

### v1.0.0 (October 22, 2023)
- Published.

### v1.1.0 (November 11, 2023)
- Now can be install with VRCFury!
- LMS will have 2 separate prefab, please watch the tutorial for details.
- Normalize audio and use Audio Spatial for better experiences. (If you don't like it, feel free to modify).
- Now LMS will use shared-parameter with PCS. Mean that using both PCS and LMS will use less parameters.

### v1.2.0 (February 06, 2024)
- Add a new LMS Configurator Tool for easier and more convinient installation. (The tutorial also change, please watch it on youtube.)
- This tool will also automatically calculate the initial scale of LMS contact and physbone.
- Reduce audio spatial gain. Now it won't peak and pumped by the audio limiter.
- Fix climax bar not display to other players.
- Now using detach mode can switch between left and right hand. *Tip: You can add a Parent Constraint to "VFX" under LMS Contact to make cum particles follow your penetrator tip bone. (Please note that it will follow the bone, not the deformation mesh.)
- Hotfixes.

### v1.3.0 (September 06, 2024)
- Now use the new VRC Constraint and VRC AudioPlayer. This version require SDK version 3.7.0
- Edited cum particles effect and the way it behave when finish inside and outside.
- Added lil shake animation to climax bar when inserted and big shake while cumming.
- Renamed most parameters, which now make it compatible (linked) with PCS v1.7 and 1.8 ++
- Fine-tuned detection functions and clean the setup tool.
- LMS setup tool now ignores your remaining number of parameters, so you can install them even if you exceed them. You gottta manage them yourself after apply.
- Groupd all placement icons into a single game object, so you can easily hide it.
- Made sliders snap the value on 0.1 for better adjustment.
- Made individual setup tools for Modular and VRCFury. LMS will now add all parameters to Modular Parameters and generate a parameter list for VRCFury instead. So, Modular Avatar does not requires any extra setup steps while VRCFury needs Full Controller setup (just drag & drop your generated assets into VRCFury Full Controller).
- Fixed most prefab issue such as incorrect scaling.
- Added 3 variant sfx for cum shot.
- Included "How to Install" image, so no more tutorial video.

### v1.4.0 (December 11, 2025)
- Added 4 language translation for the setup tool. Includes Japanese, Thai, Korean, Chinese.
- VRCFury will now auto assign the generated menu and parameter asset. No more drag and drop or missing assets (Unset, Unset) error.
- Added new sound effects by OpenNSFW
- Separate handjob and hole insertion sounds. It will automatically switch manually switch from the menu.
- Injection now has two sound types for inside and outside.
- Injection can be now squeezed out more when climax rather than just a single shot. This action will re-play extra cum shots.
- Reduce default audio source range, which is too large.
- Fix detach mode rotation (hand) that flip while using with Self-Service, which cause plap sound be triggered when move up instead of down.

### v1.4.1 (February 07, 2026)
- Fixed the worst bug of Wet Sound toggle, which complete stop LMS from working.
- Made outside cum shot endlessly instead of 5 shots. You can do this as many times within 1.0 second or it will be stopped.










