import useBaseUrl from '@docusaurus/useBaseUrl';

# Detection Output Parameter
This is a guide for how to use PCS output parameters from the detection system on your own animator controller to create dynamic and exciting animations.
Such as, [making your avatar’s hips react or bounce](https://x.com/ScarlettKat_/status/1799282805496754550) when an impact is detected at certain intensity level.

<img src={useBaseUrl('/img/pcs-example-fx.png')} width="960" />

##  Getting Started
1. Right click on your animator controller and open it.
2. Go to `Parameters` tab and add the PCS parameter you want to use (all parameters are listed below).
    > Make sure you enter the correct parameter name and its type. Otherwise, it will create a different parameter and will not sync.
3. You can then freely use that parameter in your trasition line conditions.


## Output Parameters List
| Name | Description | Type |
|-----------------|--------------------|----------|
| `pcs/output/move-in` | True once, then false, when a plug goes inward | Bool |
| `pcs/output/move-out` | True once, then false, when a plug goes outward | Bool |
| `pcs/output/smash-hit` | True once, then false, when a plug goes inward with greater intensity (speed) | Bool |
| `pcs/output/smash-intensity` | Level of smash intensity (`1-4`) for soft, medium, hard, and heavy. | Int |
| `pcs/output/depth-value` | The depth value calculated from the outer area of ​​the spherical receiver to the center point (`0.0-1.0`) | Float |
| `pcs/output/slide-in` | Inward sliding checker, `0` means still, (`0.01-1.0`) means is sliding inward.| Float |
| `pcs/output/slide-out` | Outward sliding checker, `0` means still, (`0.01-1.0`) means is slide outward. | Float |
| `pcs/output/hole-exit` | True once, then false, when a plug exit the hole or the detection area. | Bool |
| `pcs/output/quicken` | True when performing fast strokes. False when stop or resting from fast strokes. | Bool |
| `pcs/output/deep-throat` | True once, then false, when performing deep throat from oral. | Bool |
| `pcs/output/velocity` | The velocity from insertion. Return 0 when stay still (`0.0-1.0`)| Float |
| `pcs/satisfaction/lust` | Lust value in float (`0.0-1.0`). Climax event happens when this value reach `1.0` | Float |
| `pcs/satisfaction/lust-int` | Lust value in integer (`0-100`). Climax event happens when this value reach `100`| Int |
| `pcs/satisfaction/event` | Current event state (`1-10`) calculated from lust level. Where 10 is climax event. | Int |
