/* eslint no-param-reassign: ["error", { "props": false }] */

import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { gsap } from 'gsap'
import { Button } from 'wedex-uikit/src'
import { setStatus, setStartTime, setElapsedTime } from 'state/crash'

// import { useCrash } from 'state/hooks'
import Canvas from './Canvas'

const CrashCanvas = () => {
  const xStart = 60
  const yStart = 40
  const colors = ['#30f66b', '#F0D93F', '#FCFD32', '#F0D93F', '#F0D93F', '#fd6775', '#B7C6D8', '#CCCCCC', '#000000']
  const data: any = {
    startTime: Date.now(),
    escapes: [],
  }

  const { escapes } = data
  const dispatch = useDispatch()
  //   const { status, startTime, elapsedTime } = useCrash();
  const startTime = Date.now()
  const status = 'PROGRESS'
  const elapsedTime = 0
  // const socket = useContext(SocketContext);

  const twedex = (t) => {
    let e = 0.4
    let n = 0.1
    const r = !0
    while (r) {
      if (t < e) {
        return n
      }
      e *= 5
      n *= 2
      if (t < e) {
        return n
      }
      e *= 2
      n *= 5
    }
    return 0
  }

  const timeToRate = (t) => {
    // return Math.pow(Math.E, 6e-5 * t)
    return Math.E ** (6e-5 * t)
  }

  const fontSizePx = (ctx, t) => {
    const e = ctx.canvas.width / (ctx.canvas.width < 1e3 ? 60 : 100)
    const n = e * t
    return `${n.toFixed(2)}px`
  }

  const clean = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  }

  const drawGraph = (ctx) => {
    const plotHeight = ctx.canvas.height - yStart

    ctx.lineWidth = 3
    ctx.strokeStyle = '#000000'
    ctx.beginPath()
    let t = [0, 0]
    const e = Math.max(data.currentTime / 1e3, 100)
    for (let n = 0, r = 0; n <= data.currentTime; n += e, r++) {
      const i = timeToRate(n) - 1
      const s = data.plotHeight - i * data.heightIncrement
      const o = n * data.widthIncrement
      t = [o + xStart, s]
      ctx.lineTo(t[0], t[1])
    }
    ctx.stroke()
    ctx.lineTo(t[0], plotHeight)
    ctx.fillStyle = `rgba(0,0,0,.1)`
    ctx.closePath()
    ctx.fill()
  }

  const drawAxes = (ctx) => {
    // const YAxisPlotMaxValue = data.YAxisPlotMinValue
    const payoutSeparation = twedex(data.currentGamePayout ? data.currentGamePayout : 1)

    ctx.lineWidth = 1
    ctx.strokeStyle = colors[7]
    ctx.font = '16px Verdana'
    ctx.fillStyle = colors[5]
    ctx.textAlign = 'center'

    const n = data.plotHeight / data.YAxisPlotValue
    for (let r = payoutSeparation, a = 0; r < data.YAxisPlotValue; r += payoutSeparation, a++) {
      const i = data.plotHeight - r * n
      if (
        (ctx.fillText(`${(r + 1).toFixed(1)}x`, 30, i),
          ctx.beginPath(),
          ctx.moveTo(xStart, i),
          ctx.lineTo(xStart + 5, i),
          ctx.stroke(),
          a > 100)
      ) {
        // console.log("For 3 too long");
        break
      }
    }

    const milisecondsSeparation = twedex(data.XAxisPlotValue)
    const XAxisValuesSeparation = data.plotWidth / (data.XAxisPlotValue / milisecondsSeparation)
    for (let s = 0, o = 0, c = 0; s < data.XAxisPlotValue; s += milisecondsSeparation, o++, c++) {
      const u = (s / 1e3).toFixed(0)
      const l = ctx.measureText(u).width
      const p = o * XAxisValuesSeparation + xStart
      if ((ctx.fillText(u, p - l / 2, data.plotHeight + 20), c > 100)) {
        // console.log("For 4 too long");
        break
      }
    }

    ctx.lineWidth = 1
    ctx.strokeStyle = '#000000'
    ctx.beginPath()
    ctx.moveTo(xStart, 0)
    ctx.lineTo(xStart, ctx.canvas.height - yStart)
    ctx.lineTo(ctx.canvas.width - xStart, ctx.canvas.height - yStart)
    ctx.stroke()
  }

  const drawGameData = (ctx) => {
    if (status === 'PROGRESS') {
      ctx.fillStyle = data.gradient
      ctx.font = `${fontSizePx(ctx, 8)} Verdana`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(
        `${parseFloat(data.currentGamePayout).toFixed(2)} x`,
        ctx.canvas.width / 2,
        (ctx.canvas.height - yStart) / 2,
      )
    } else if (status === 'ENDED') {
      // if (this.auto_mode) {
      //   this.betNextRound = true;
      // }
      ctx.font = `${fontSizePx(ctx, 5)} Verdana`
      ctx.fillStyle = data.gradient1
      ctx.fillText(
        `Bang @${timeToRate(elapsedTime).toFixed(2)}x`,
        ctx.canvas.width / 2,
        (ctx.canvas.height - yStart) / 2,
      )
    } else if (status === 'STARTING') {
      // if (this.betNextRound || (!this.sent_bet_auto_mode && this.auto_mode)) {
      //     this.betNextRound = false;
      //     this.bet();
      //     this.sent_bet_auto_mode = true;
      // }
      ctx.font = `${fontSizePx(ctx, 5)} Verdana`
      ctx.fillStyle = data.gradient
      const t = (startTime - Date.now()) / 1e3
      if (t < 0) {
        dispatch(setStatus('PROGRESS'))
        return
      }
      ctx.fillText(`Starts in ${t.toFixed(0)}s`, ctx.canvas.width / 2, (ctx.canvas.height - yStart) / 2)
    } else if (status === 'CONNECTION') {
      ctx.font = `${fontSizePx(ctx, 4)} Verdana`
      ctx.fillStyle = '#42DD8E'
      ctx.fillText('Error network', ctx.canvas.width / 2, (ctx.canvas.height - yStart) / 2)
    }
  }

  const calculatePlotValues = (ctx) => {
    const XAxisPlotMinValue = 1e4
    const YAxisSizeMultiplier = 2
    const plotHeight = ctx.canvas.height - yStart
    const plotWidth = ctx.canvas.width - 2 * xStart
    data.currentGamePayout = timeToRate(data.currentTime)

    data.YAxisPlotMinValue = YAxisSizeMultiplier
    data.YAxisPlotValue = data.YAxisPlotMinValue
    data.XAxisPlotValue = XAxisPlotMinValue
    if (data.currentTime > XAxisPlotMinValue) {
      data.XAxisPlotValue = data.currentTime
    }
    if (data.currentGamePayout > data.YAxisPlotMinValue) {
      data.YAxisPlotValue = data.currentGamePayout
    }
    data.YAxisPlotValue -= 1

    data.plotHeight = plotHeight
    data.plotWidth = plotWidth

    data.widthIncrement = plotWidth / data.XAxisPlotValue
    data.heightIncrement = plotHeight / data.YAxisPlotValue
    data.currentX = data.currentTime * data.widthIncrement
  }

  const drawEscapes = (ctx) => {
    const e = `${fontSizePx(ctx, 1.2)} Verdana`
    // console.log("escapes", escapes.length);
    // eslint-disable-next-line func-names
    escapes.forEach(function (n) {
      ctx.font = e
      ctx.fillStyle = 'rgba(0,0,0,.5)'
      ctx.globalAlpha = n.payoutTween / n.payout

      const c = xStart + data.widthIncrement * n.elapsed
      const u = data.plotHeight - n.payoutTween * data.heightIncrement

      // const l = (.01 * n.rate).toFixed(2);
      const l = n.rate
      ctx.fillText(''.concat(n.name, ' @').concat(l), c, u + 20)
      ctx.beginPath()
      ctx.arc(c, u, 5, 0, 2 * Math.PI)
      ctx.closePath()
      ctx.fill()
      ctx.globalAlpha = 1
    })
  }

  const draw = (ctx) => {
    data.gradient = ctx.createLinearGradient(ctx.canvas.width / 3, 0, (2 * ctx.canvas.width) / 3, 0)
    data.gradient.addColorStop('0', colors[4])
    data.gradient.addColorStop('1.0', colors[5])
    data.gradient1 = ctx.createLinearGradient(ctx.canvas.width / 3, 0, (2 * ctx.canvas.width) / 3, 0)
    data.gradient1.addColorStop('0', '#ff8471')
    data.gradient1.addColorStop('1.0', '#ff8471')

    calcGameData()
    calculatePlotValues(ctx)
    clean(ctx)
    drawGraph(ctx)
    drawAxes(ctx)
    drawGameData(ctx)
    drawEscapes(ctx)
  }

  const calcGameData = () => {
    if (status === 'PROGRESS') {
      const t = Date.now() - startTime
      if (!data.paused) {
        data.currentTime = t > 0 ? t : 0
      }
    } else {
      data.currentTime = 0
    }
    data.currentGamePayout = timeToRate(data.currentTime)
  }

  const _escape = useCallback(
    (t) => {
      if (!window.document.hidden && status === 'PROGRESS') {
        const n = { ...t }
        n.elapsed = data.currentTime
        n.payout = timeToRate(data.currentTime) - 1
        n.payoutTween = n.payout

        gsap.to(n, 8, {
          payoutTween: 0,
          onComplete() {
            const _t = escapes.indexOf(n)
            if (_t !== -1) {
              escapes.splice(_t, 1)
            }
          },
        })
        escapes.push(n)
      }
    },
    [data.currentTime, status, escapes],
  )

  const _start = () => {
    dispatch(setStatus('PROGRESS'))
    dispatch(setStartTime(Date.now()))
  }

  const _bang = useCallback(() => {
    if (status !== 'PROGRESS') return
    dispatch(setElapsedTime(Date.now() - startTime))
    dispatch(setStatus('ENDED'))
  }, [status, startTime, dispatch])

  const _prepare = useCallback(() => {
    dispatch(setStatus('STARTING'))
    dispatch(setStartTime(Date.now() + 5000))
  }, [dispatch])

  // useEffect(() => {
  //     socket.on("crash", (obj) => {
  //         // console.log(obj);
  //         if (obj.state === "STARTING") {
  //             _prepare();
  //         } else if (obj.state === "ENDED") {
  //             _bang();
  //         }

  //         if (obj.type === "escape") {
  //             _escape({
  //                 name: "Cuong",
  //                 rate: obj.payout.toFixed(2),
  //             });
  //         }
  //     });
  // }, [socket, _prepare, _bang, _escape])

  return (
    <div
      style={{
        width: '100%',
        height: '100',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px 20px',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <Canvas
          draw={draw}
          startTime={startTime}
          style={{ width: '850px', maxWidth: '100%' }}
          width="1344px"
          height="538px"
        />
      </div>

      {/* <div style={{ textAlign: 'center', marginTop: '50px' }}>{status}</div>

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Button onClick={_escape}>Escape</Button> <Button onClick={_start}>Start</Button>
      </div> */}
    </div>
  )
}
export default CrashCanvas
