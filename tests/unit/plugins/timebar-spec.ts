import G6 from '../../../src';
import View, { registerGeometry } from '@antv/g2/lib/chart/view'
import Line from '@antv/g2/lib/geometry/line'
import '@antv/g2/lib/geometry/shape/line/step'
import { createScaleByField } from '@antv/g2/lib/util/scale'
import { getCoordinate } from '@antv/coord';
import { getTheme } from '@antv/g2'

const div = document.createElement('div');
div.id = 'timebar-plugin';
document.body.appendChild(div);

registerGeometry('Line', Line);

const data = {
  nodes: [
    {
      id: 'node1',
      label: 'node1',
      x: 100,
      y: 100
    },
    {
      id: 'node2',
      label: 'node2',
      x: 150,
      y: 300
    }
  ],
  edges: [
    {
      source: 'node1',
      target: 'node2'
    }
  ]
}

// for(let i = 0; i < 100; i++) {
//   const id = `node-${i}`
//   data.nodes.push({
//     id,
//     label: `node${i}`,
//     date: `2020${i}`,
//     value: Math.round(Math.random() * 300)
//   })

//   const edgeId = i + 3
//   data.edges.push({
//     source: `node-${Math.round(Math.random() * 90)}`,
//     target: `node-${Math.round(Math.random() * 90)}`
//   })
// }

G6.registerNode('chart-node', {
  draw(cfg, group) {
    console.log(group)
    const canvas = group.get('canvas')
    const keyShape = group.addShape('rect', {
      attrs: {
        x: 0,
        y: 0,
        width: 200,
        height: 100,
        stroke: 'red',
        fill: '#fff'
      }
    })

    keyShape.toBack()

    const backgroundGroup = group.addGroup();
    const middleGroup = group.addGroup();
    const foregroundGroup = group.addGroup();

    const view = new View({
      parent: null,
      canvas,
      foregroundGroup,
      middleGroup,
      backgroundGroup,
      padding: 5,
      visible: true,
      region: {
        start: {
          x: 0,
          y: 0
        },
        end: {
          x: 0.3,
          y: 0.1
        }
      },
    });

    const data = [
      { date: 1489593600000, pv: 17, time: 12351000 },
      { date: 1489680000000, pv: 10, time: 18000 },
      { date: 1489766400000, pv: 3, time: 0 },
      { date: 1489852800000, pv: 3, time: 0 },
      { date: 1489939200000, pv: 18, time: 21157000 },
      { date: 1490025600000, pv: 32, time: 3543000 },
      { date: 1490112000000, pv: 25, time: 10000 },
      { date: 1490198400000, pv: 23, time: 24000 },
      { date: 1490284800000, pv: 7, time: 0 },
    ];

    
    view.data(data)

    const Theme = getTheme('default');
    view.theme(Theme)
    
    view
      .line()
      .position('date*pv')
      .color('#4FAAEB');

    view.line()
      .position('date*time')
      .color('#9AD681')
      .shape('dash');

    view.scale('date', {
      sync: true,
      tickCount: 5,
      range: [0, 1]
    });

    view.axis('date', {
      line: {
        // @type {Attrs} 坐标轴线的图形属性,如果设置成null，则不显示轴线
        style: {
          lineWidth: 1,
          stroke: 'green',
        },
      },
      tickLine: {
        // @type {Attrs} 标注坐标线的图形属性
        style: {
          lineWidth: 1,
          stroke: 'green',
        },
        alignTick: true, // 是否同 tick 对齐
        length: 5,
        displayWithLabel: true,
      },
      subTickLine: {
        // @type {Attrs} 标注坐标线的图形属性
        style: {
          lineWidth: 1,
          stroke: 'green',
        },
        count: 4, // 子刻度线的数量，将两个刻度线划分成 5 份
        length: 2,
      },
      label: {
        autoRotate: true,
        autoHide: false,
        autoEllipsis: false,
        style: {
          fontSize: 12,
          fill: 'red',
          textBaseline: 'middle',
          // fontFamily: Theme.fontFamily,
          fontWeight: 'normal',
        },
        offset: 10,
      },
      title: {
        autoRotate: true,
        spacing: 5,
        position: 'center', // start, center, end
        style: {
          fontSize: 12,
          fill: '',
          textBaseline: 'middle',
          // fontFamily: Theme.fontFamily,
          textAlign: 'center',
        },
      },
    })

    view.render()

    return keyShape
  }
})

describe('tooltip', () => {
  it('tooltip with default', () => {
    const timeBarData = []

    for(let i = 0; i < 100; i++) {
      timeBarData.push({
        date: `2020${i}`,
        value: Math.round(Math.random() * 300)
      })
    }
    const timebar = new G6.TimeBar({
      timebar: {
        trend: {
          data: timeBarData,
          isArea: false,
          smooth: true,
        }
      }
    });
    const tooltip = new G6.Tooltip()

    const graph = new G6.Graph({
      container: div,
      width: 500,
      height: 500,
      plugins: [timebar, tooltip],
      modes: {
        default: ['drag-node', 'zoom-canvas', 'drag-canvas']
      },
      defaultNode: {
        type: 'chart-node'
      },
      defaultEdge: {
        style: {
          lineAppendWidth: 20
        }
      }
    });

    graph.data(data)
    graph.render()

    const timebarPlugin = graph.get('plugins')[0]
    console.log(timebarPlugin)
    // expect(timebarPlugin.get('offset')).toBe(6)
    // expect(timebarPlugin.get('tooltip').outerHTML).toBe(`<div class="g6-component-tooltip" style="position: absolute; visibility: hidden;"></div>`)

    // graph.destroy()
  })
});
