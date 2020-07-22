import G6 from '../../../src';
import View, { registerGeometry } from '@antv/g2/lib/chart/view'
import Line from '@antv/g2/lib/geometry/line'
import Area from '@antv/g2/lib/geometry/area'
import Polygon from '@antv/g2/lib/geometry/polygon'
import Point from '@antv/g2/lib/geometry/point'
import '@antv/g2/lib/geometry/shape/line/step'
import { createScaleByField } from '@antv/g2/lib/util/scale'
import { getCoordinate } from '@antv/coord';
import { getTheme } from '@antv/g2'
import { registerComponentController, registerAction, registerInteraction } from '@antv/g2/lib/core'

import Interval from "@antv/g2/lib/geometry/interval";
import Axis from "@antv/g2/lib/chart/controller/axis";

// ToolTip
import ToolTip from '@antv/g2/lib/chart/controller/tooltip'
import ToolTipAction from '@antv/g2/lib/interaction/action/component/tooltip'


registerInteraction('tooltip', {
  start: [
    { trigger: 'element:mousemove', action: 'tooltip:show', throttle: { wait: 50, leading: true, trailing: false } },
    { trigger: 'element:touchmove', action: 'tooltip:show', throttle: { wait: 50, leading: true, trailing: false } },
  ],
  end: [
    { trigger: 'element:mouseleave', action: 'tooltip:hide' },
    { trigger: 'element:leave', action: 'tooltip:hide' },
    { trigger: 'element:touchend', action: 'tooltip:hide' },
  ],
});



const div = document.createElement('div');
div.id = 'timebar-plugin';
document.body.appendChild(div);

registerGeometry('Line', Line);
registerGeometry('Area', Area)
registerGeometry('Polygon', Polygon)
registerGeometry('Point', Point)

registerGeometry("Interval", Interval);

registerComponentController("axis", Axis);

registerComponentController('tooltip', ToolTip)
registerAction('tooltip', ToolTipAction);

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
      type: 'node-with-bar',
      x: 150,
      y: 300
    },
    {
      id: 'node3',
      label: 'node3',
      type: 'node-with-geometry',
      x: 200,
      y: 500
    }
  ],
  edges: [
    {
      source: 'node1',
      target: 'node2'
    }
  ]
}

G6.registerNode('node-with-line', {
  draw(cfg, group) {
    const canvas = group.get('canvas')
    const keyShape = group.addShape('rect', {
      attrs: {
        x: 0,
        y: 0,
        width: 400,
        height: 200,
        // stroke: 'red',
        fill: '#e6f7ff'
      }
    })

    keyShape.toBack()

    group.addShape('rect', {
      attrs: {
        x: 0,
        y: 0,
        width: 400,
        height: 40,
        fill: '#69c0ff'
      }
    })

    group.addShape('text', {
      attrs: {
        text: '浏览申请完成率',
        x: 10, 
        y:25,
        fontSize: 14,
        fill: '#fff' 
      }
    })

    group.addShape('text', {
      attrs: {
        text: '2020-06-07 ~ 2020-06-14 | 均值',
        x: 20,
        y: 70,
        fontSize: 13,
        fill: '#8c8c8c'
      }
    })

    group.addShape('text', {
      attrs: {
        text: '8.8%',
        x: 20,
        y: 130,
        fontSize: 30,
        fill: '#000'
      }
    })

    const backgroundGroup = group.addGroup();
    const middleGroup = group.addGroup();
    const foregroundGroup = group.addGroup({
      name: 'chartgroup'
    });

    // backgroundGroup.toFront()
    // middleGroup.toFront()
    // foregroundGroup.toFront()

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
          y: 0.2
        },
        end: {
          x: 0.8,
          y: 0.38
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
    
    view
      .area()
      .position('date*pv')
      .color('#4FAAEB');

    view
      .point()
      .position('date*pv')
      .color('#4FAAEB');

    view.line()
      .position('date*time')
      .color('#9AD681')
      .shape('dash');
      
    view.interaction('tooltip')

    view.axis(false)

    // view.lockTooltip()
    view.tooltip({
      showCrosshairs: true,
      shared: true,
    })

    view.render()

    return keyShape
  }
})

G6.registerNode('node-with-bar', {
  draw(cfg, group) {
    const canvas = group.get('canvas')
    const keyShape = group.addShape('rect', {
      attrs: {
        x: 0,
        y: 0,
        width: 400,
        height: 200,
        fill: '#e6f7ff'
      }
    })

    keyShape.toBack()

    group.addShape('rect', {
      attrs: {
        x: 0,
        y: 0,
        width: 400,
        height: 40,
        fill: '#69c0ff'
      }
    })

    group.addShape('text', {
      attrs: {
        text: '浏览申请完成率',
        x: 10, 
        y:25,
        fontSize: 14,
        fill: '#fff' 
      }
    })

    group.addShape('text', {
      attrs: {
        text: '2020-06-07 ~ 2020-06-14 | 均值',
        x: 20,
        y: 70,
        fontSize: 13,
        fill: '#8c8c8c'
      }
    })

    group.addShape('text', {
      attrs: {
        text: '8.8%',
        x: 20,
        y: 110,
        fontSize: 30,
        fill: '#000'
      }
    })

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
          x: 0.01,
          y: 0.2
        },
        end: {
          x: 0.8,
          y: 0.35
        }
      },
    });

    const data = [
      { genre: "Sports", sold: 275 },
      { genre: "Strategy", sold: 115 },
      { genre: "Action", sold: 120 },
      { genre: "Shooter", sold: 350 },
      { genre: "Other", sold: 150 }
    ];
    
    view.data(data);
    
    view
      .interval()
      .position("genre*sold")
      .color("genre");
    
    view.legend("genre", false);
    
    view.scale({
      genre: {
        alias: "游戏种类" // 列定义，定义该属性显示的别名
      },
      sold: {
        alias: "销售量"
      }
    });

    view.axis('sold', false)
    
    view.render();

    return keyShape
  }
})

G6.registerNode('node-with-geometry', {
  draw(cfg, group) {
    const canvas = group.get('canvas')
    const keyShape = group.addShape('rect', {
      attrs: {
        x: 0,
        y: 0,
        width: 400,
        height: 200,
        fill: '#e6f7ff'
      }
    })

    keyShape.toBack()

    group.addShape('rect', {
      attrs: {
        x: 0,
        y: 0,
        width: 400,
        height: 40,
        fill: '#69c0ff'
      }
    })

    group.addShape('text', {
      attrs: {
        text: '浏览申请完成率',
        x: 10, 
        y:25,
        fontSize: 14,
        fill: '#fff' 
      }
    })

    group.addShape('text', {
      attrs: {
        text: '2020-06-07 ~ 2020-06-14 | 均值',
        x: 20,
        y: 70,
        fontSize: 13,
        fill: '#8c8c8c'
      }
    })

    group.addShape('text', {
      attrs: {
        text: '8.8%',
        x: 20,
        y: 110,
        fontSize: 30,
        fill: '#000'
      }
    })

    const backgroundGroup = group.addGroup();

    const data = [
      { genre: "Sports", sold: 275 },
      { genre: "Strategy", sold: 115 },
      { genre: "Action", sold: 120 },
      { genre: "Shooter", sold: 350 },
      { genre: "Other", sold: 150 }
    ];

    const scaleDefs = {
      a: { range: [0, 1] }
    };

    const scales = {
      genre: createScaleByField("genre", data, scaleDefs),
      sold: createScaleByField("sold", data, scaleDefs)
    };

    const CartesianCoordinate = getCoordinate("rect");

    const rectCoord = new CartesianCoordinate({
      start: { x: 380, y: 200 },
      end: { x: 20, y: 100 }
    });

    const interval = new Interval({
      data,
      scales,
      coordinate: rectCoord,
      container: backgroundGroup
    })

    interval.position('genre*sold')
      .color('genre')

    const theme = getTheme('default')
    
    interval.init({
      theme: theme
    })
    interval.paint()

    return keyShape
  }
})

describe('node with G2', () => {
  it('view', () => {

    const graph = new G6.Graph({
      container: div,
      width: 500,
      height: 500,
      modes: {
        default: ['drag-node', 'zoom-canvas', 'drag-canvas']
      },
      defaultNode: {
        type: 'node-with-line'
      },
      defaultEdge: {
        style: {
          lineAppendWidth: 20
        }
      }
    });

    graph.data(data)
    graph.render()
  })

  // it('geometry', () => {

  // })
});
