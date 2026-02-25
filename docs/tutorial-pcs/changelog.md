# Changelog

### v1.0.0 (August 13, 2023)
- Published.

### v1.1.0 (August 23, 2023)
- Reduce parameters used from 38 to 26 bits.
- Fine tune detectors respond to make it feel more natural.
- Prevent contacts from double hits when a sender velocity is too low.
- Fix "Force Orgasm" function. Now it works properly.
- Add a new 5 "Squishy" sound fx that will be randomly played before and after reaching orgasm. (because it's still wet.)
- Make and use "Reset Button" to reset lust points instead of restarting the whole system.
- Make and use the "Squirt button" to make avatar squirt by manual.
- Reaching orgasm events does not require reset to continue the interaction. Now it will automatically roll back to the beginning.

### v1.2.0 (September 04, 2023)
- Now, a penetrator needs to insert from the exact entrance position to start an interaction. This prevents triggering an input when you are trying to touch the avatar's cheeks, not the mouth. *This is experimental.
- Improve how moan randomizer works and prevent it from playing the same sound twice, which causes unusual feelings.
- Moan Randomizer has a better "Pause Function", and it can be controlled by each satisfaction event.
- Reduce the number of satisfaction events from 38 to 26. Having too many events is likely to be unnecessary and harder to customize.
- But now, it has a "pause moan for event" checkbox to decide whether to let the sound play normally or pause them while the event is playing.
- Decided to add 12 free sample moan voices and 1 response dialog to make it more easy for you to customize as an example.

### v1.2.1 (September 12, 2023)
- Add some missing 1.2 features.
- Sorry for the mistake.

### v1.3.0 (September 23, 2023)
- New function for Hidden Penetrator. "Click" the menu will set and hide it, while "Hold" will auto-calibrate it to crotch position.
- Make support for proximity contact to handle things like too deep.
- Make the menu option "Mute Hit" to let you mute/unmute hit sfx.
- Hotfixes and fine-tune contacts sensitivity.

### v1.4.0 (October 07, 2023) [Watch now!](https://www.youtube.com/watch?v=fnpGXHKyz10)
- New feature called “Self-service”. This feature completely replaces the use of Hidden Penetrator. Using this doesn’t require a penetrator to get detected by PCS. You can always make sounds just by shaking your hips.
- Moans are separated into 2 types for Soft & Rough.
- Big rework on Events and Moan Randomizer.
- Make PCS work better with DPS penetrators.
- Make a "Squirt from Insert" toggle.
- Fix audio limit problem.

### v1.4.1 (October 11, 2023)
- Hotfix for Heart Particles that keep repeating appear after orgasm was reset on Write Default OFF.

### v1.5.0 (October 29, 2023)
- Now fully support SPS! and support installation with VRCFury.
- Finally add Boobs and Anal. Both of them will have their own sfx.
- Replace smash hit and oral sound effects with something more realistic.
- Re-design the main prefab to make it clean and more easy to set up.
- Add a menu option "Self-Interact" to Enable/Disable self interaction.
- Add Commercial License for commercial use purposes. Must purchase if you plan to use PCS on sale/commission avatars.

### v1.5.1 (November 07, 2023)
- Reduce the number of Parent Constraints used by 7, which increase avatar performance. Thanks for the many help from the VRCF community.
- Minor improvements on random moan, event moan, smash hit, and orgasm jet. Now they have a minimum delay between each sound that makes the “stuttering” issue less trigger.
- Separate Smash Hit to an individual instance. It means that “Plap Plap” sounds will play more smoothly and less be cut when stroking too fast.
- Change Lust Point parameter type from Integer to Float, which will be used together with LMS later.
- Now PCS can be auto-select and auto-activate when using VRCF SPS.

### v1.5.2 (November 22, 2023)
- Fix Lust point value that sometimes stuck. This causes the lust point to never increase again from being inserted.
- Fix mouth position that offset from the adjusted position.
- Fix smash hit animation clips. (The issue only affects people who use Write Default OFF.)
- Fix uncommon issues that make the proximity fly away for some reason.
- Make Tijob play "slapping" sounds when triggering a smash hit instead of a regular motion.
- Remove the Self-interact menu option. I think we should use the one inside the VRChat setting menu instead.
- Add Auto-select mode to PCS. (For VRCF, you don't need to set up a socket FX Parameters like before. However, you can still do it to make sure that PCS will select the same part as SPS do.)
- Add a free constraint slot that you can attach PCS to. For example, attach it to your sex toy.
- Clean and normalize sound effects, and use audio spatial for better experience. (Thanks ScarlettKat for the suggestion.)
- PCS now comes with two UnityPackages (with_lust and without_lust, please select only one).

### v1.6.0 (December 23, 2023) [Watch now!](https://x.com/dismay_vrc/status/1737296867279634639)
- Now PCS can detect the intensity of a smash hit. This allows us to have two types of smash sounds for soft and heavy smash.
- This will play sticky sounds continuously while you are being penetrated.
- Finally add a voice pack that seems suitable for Gumroad avatar.
- New sound effect pack for some body parts. (Old files not included, you can still get it from older packages.)
- Now PCS comes with a configurator tool that helps the setup process become easier. From now on PCS will be set up this way, no manually drag and drop again.
- Now can calculate and match the duration for moan and its animation state. This helps prevent the issue where it was cut before the end.
- Now you can determine how quick you will orgasm by changing Lust Multiplier via the configurator tool.
- Now using Custom Mode will let random moans play but freeze lust points. (It might sound weird if you moan from a toy being penetrated.) But this allows moan to play in case you didn’t attach it to a toy. So use Mute - Moan option is the solution.
- Mix with Lust and without Lust back into one package. Everything will be done via the new Script Tool.
- Now PCS can calculate and match each moan states duration with their audio clip duration. This is very useful when you replace moan and now you don’t need to adjust it directly one by one inside the controller.
- Improve Auto-select.

### v1.6.1 (March 07, 2024)
- Fix where the tool applies/remove/replace PCS to all active avatars on the same scene. Now only selected avatar will be installed.
- Remove clipSpeed local parameters. This might fix overflow parameters.
- General Preset now references the avatar's bone position. This makes their position closer, makes it easier to adjust.
- Add tooltips for each option. Hover your mouse on and it will show.

### v1.6.1.1 (March 12, 2024)
- Fix where VRCFury prefab can't find the satisfaction parameter asset.

### v1.7.0 (June 22, 2024) [Watch now!](https://x.com/dismay_vrc/status/1804348593056419857)
- Fix Reference preset. Now they won’t shift back to the bone position.
- Fix scaling issue on avatar with big armature or non initial scale.
- Add more slots for custom locations! You can now choose up to 8 slots.  Each one will use only 1 extra parameter.
- Add slide and smash sounds for oral, and new exit sound.
- Add Quick Access menu to locate each sound targets and folders, and hide/show guiding graphics.
- Add Find SPS Socket button for a quick auto-fill SPS socket.
- Add a collision tag PCS_Penetrating specifically for PCS receiver. This was added for users who want to trigger the sound of PCS but don’t want to trigger SPS animation.
- Add new wet and 4 levels of smash hit sound effects pack.
- Now PCS will merge its parameters directly to your avatar. This is where the tool will generate per-avatar settings and backup your original files into a folder.
- The setup tool can now save your settings. This is good when you want to go back and change some settings without starting it all over again.
- Every sound type will have their own new sounds and detection state Full Exit that triggers when a penetrator is fully taken out.
- New smash detection. Now we have 4 intensity smashes, soft, medium, hard, and heavy. That depends on your force.
- Bring back Self-Touch toggle to prevent you from touching yourself while using both PCS and SPS plug.
- You can now perform Endless Squirt by holding down the Forced Orgasm.
- New moan state Combo when getting rough and rapid f*ck.
- Redesign PCS controller for better performance.
- Now use the new AnimatorPlayAudio state behavior for sound randomization. This cut the use of audio source by over 100 components, now PCS uses only 3 audio.
- Make Self-Service a bit easier to trigger with horizontal motion.
- Improve smash sensitivity. Now it should be more natural to trigger.              
- Improve squirt particles. Now it should look more real.
- Now you can now use Force Orgasm and squirt without using the Lust feature. Lust feature is now only for voice and satisfaction events.
- The Terms of use of the commercial version have been updated.
- This version of PCS is only compatible with LMS version 1.3 (coming soon). Sorry for the inconvenience
- Improve slide sound detection.

### v1.7.0.1 (June 28, 2024)
- Hotfix where the VRC HeadChop is missing from the mouth target which causes incorrect mouth position.

### v1.7.0.2 (June 28, 2024)
- Fix SPS linking parameters that do not work properly, please use pcs/select/mouth, boobs, pussy, or ass instead of pcs/sps.
- Fix where the tool can't created #Generate a folder and add a warning if your avatar's name contains forbidden characters.
- Fix missing parameters when LocalOnlyToggle option is checked.
- Fix where the voice menu still appears when disable the voice pack.

### v1.8.0.0 (September 25, 2024)
- Now use VRC Constraints. This version requires SDK version 3.7.0.
- Modified smash detection function with the new velocity and intensity value. 
- New smash sound effect and added free alternative smash package made by Argitoth and LittleTea.
- Now the Generic preset will calculate and place each target in a more appropriate position.
- Make PCS back to non-destructive flow by not adding parameters to your avatar. PCS will add all parameters to Modular Parameters and generate a parameter list for VRCFury instead. So, now Modular Avatar does not require any extra setup steps while VRCFury needs Full Controller setup (just drag & drop your generated assets into VRCFury Full Controller).
- PCS setup tool now ignores your remaining number of parameters, so you can install them even if you exceed them. You gotta manage them yourself after applying.
- Eliminate the requirement of having an avatar expression parameter.
- Group all placement icons into a single game object, so you can easily hide it.
- PCS targets will now stay inside PCS prefab and be moved to your avatar with Bone Proxy or Armature Link instead. (Reference preset and custom position will still be moved out to your chosen location)
- Cleaned up and separated the tool specific for Modular and VRCFury.
- Made sliders snap the value on 0.1 for better adjustment.
- Removed Gumroad base from alignment preset. (Due to various modifications on those models, I will convince you to use the Reference preset with Find SPS Sockets option instead for perfect positioning)
- Added Lasyusha, Airi, Mizuki, Chiffon, Rurune, and Shinano to preset.
- Added fingers touch zone separated from the main detection zone.
- Added error popup when PCS failed to generate the asset folder.
- Include "How to Install" image, so no more tutorial video.
- New sliding sound.

### v1.8.0.1 (September 25, 2024)
- Hotfix where custom hole param indexes start from 0 (only occur in _VF).
- Separate MA and VF package, so no more error when Unity can't find Modular Avatar (missing nadena.dev namespace).

### v1.9.0 (Febuary 26, 2025)
- Added a new Sound Replacer tool. This tool helps you replace sound effects (for voice is still in process).
- Added new sound effects for soft, medium, hard smash, insert slide, and generic exit.
- Added new beta feature Direction Offset which allows you to rotate PCS to match penetrator’s axis for accurate SFX.
- New default Voice Pack by OpenNSFW.
- Added Milltina to Alignment Preset.
- Improvement Reduced default audio volume. Now it should be more dynamic and cleaner.
- Improved and balanced smash function.
- Redesigned moan and event layers. Now voice audio should sound more natural.
- Improved Auto-Select function. Now it should pick only the first location and change upon full exit only.
- Fix audio issues where you can hear random pop sounds when walking away on a certain point. This seemed to be caused by using VRC Spatial Audio with AudioSource Volume Curve turn on.
- Setup Tool PCS will now create a copy of the animator controller for your selected avatar, which you can modify and use later.
- VRCFury setup now will be automated one-click install. It doesn’t require drag and drop on the menu like before.
- Added Local-Only Toggle option back to fix AAP issue.
- Added rapid insert checker. This local boolean will turn true whenever you get continuous & fast strokes.
- This version won't interrupt audio source settings, so you can pitch up or down voice and SFX, or decrease volume from there. I also updated the FAQ, Help and Guide on discord server. 

### v1.9.1 (March 23, 2025)
- Fix VRCFury components that appear in Modular Prefab.
- Fix mouth misalignment (sink back to head bone).
- Change Heart and Squirt particles to Mobile/Alpha Blended.
- Add PCS_Penetrating collision tag to auto-detect receiver.


### v1.9.2 (May 27, 2025)
- Minor fix on Insert Detection animator layer that ignores some transition conditions. Causing voice to play without first insert.
- Fix the tool that misaligns PCS, voice, particles position when avatar position is not set to 0,0,0.

### v1.10.0 (October 22, 2025)
- Introduced a brand new Audio Replacer tool. Now you can easily replace your own sound effect and voice pack!
- Added new oral sound state "gagging" with soft and rough variant when doing deepthroat blowjob. Gagging once will continue to trigger until pulled out.
- Added new voice state "gagging" to all default voice packs that randomly triggered when performing deepthroat.
- Added Thai, Japanese, Korean, Simplify-chinese language translation for the setup tool and audio manager tool.
- Anal now has its own smash sound separate from pussy. The default pack will sound more like suction.
- New Alignment Preset for Ichigo, Uruki, Chocolat, Mafuyu, Milty.
- New oral pull out sound by sengjinn
- New paisuri hit sounds by SquishSuccubus
- New oral hit sounds by SquishSuccubus
- New pussy and anal pull out sounds by SquishSuccubus
- New plap variant by SquishSuccubus and LehornySFX3D
- Made smash intensity detection to work better. Smash intensity level will be more accurate per hit.
- Made paisuri sound a bit easier to trigger with minimum force.
- Optimized and make sure all PCS animators stop when the PCS system is off, this includes the direct blendtree.
- You can now control the PCS sound menu with SPS socket without removing the menu (without using Local-Only Toggle). This means you can control them from both the PCS menu and socket menu. PCS targets will automatically turn off when all SPS sockets are off as well. The parameter to link the menu is still the same; pcs/select/xxx
- Fixed anal pull out sound that plays doubled.
- Reduced default audio source range, which is too large.
- Managed to use VRC Spatial Audio for better immersion. The audio might seem to be quiet but sure sounds more realistic. You can make it louder by adjusting the Gain or Near value (Gain may cause audio clipping, so increasing Near value is recommended)














