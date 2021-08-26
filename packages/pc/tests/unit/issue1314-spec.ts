import G6 from '../../src';

describe('issue1314', () => {
  const el = document.createElement('div');
  el.id = 'root';
  document.querySelector('body').appendChild(el);

  it('layout', () => {
    const data = {
      nodes: [
        {
          id: '9RQmLGueOikkikLvHVO',
          label: 'Mysql连接账户',
        },
        {
          id: 'k79zNA0TkCwQPQWw4yn',
          label: 'ETL数据流',
        },
        {
          id: 'GWMF0chbHRKDkENg1hS',
          label: 'ETL数据流2',
        },
        {
          id: 'xCzXirgILRm9fF7gjeb',
          label: '报告',
        },
        {
          id: 'I2Msu7qhDMQPmGLOduP',
          label: 'Mysql数据源',
        },
        {
          id: 'QUCo43VpL9LaPT4QVx0',
          label: 'Excel数据源',
        },
        {
          id: 'GxZeEGkky88xKxq1r22',
          label: '工厂输出表',
        },
        {
          id: 'AoJc4qPcWeOL7NJwOh6',
          label: '加工输出表',
        },
        {
          id: 'cd_638e7750847a4cc78f3cd',
          label: '图表1',
        },
        {
          id: 'cd_8119cb085435454180558',
          label: '图表2',
        },
        {
          id: 'AKl8iaVQamqiMaMCF7E',
          label: 'csv数据源',
        },
      ],
      edges: [
        {
          source: '9RQmLGueOikkikLvHVO',
          target: 'I2Msu7qhDMQPmGLOduP',
        },
        {
          source: 'k79zNA0TkCwQPQWw4yn',
          target: 'GxZeEGkky88xKxq1r22',
        },
        {
          source: 'I2Msu7qhDMQPmGLOduP',
          target: 'k79zNA0TkCwQPQWw4yn',
        },
        {
          source: 'QUCo43VpL9LaPT4QVx0',
          target: 'k79zNA0TkCwQPQWw4yn',
        },
        {
          source: 'GxZeEGkky88xKxq1r22',
          target: 'xCzXirgILRm9fF7gjeb',
        },
        {
          source: 'xCzXirgILRm9fF7gjeb',
          target: 'cd_638e7750847a4cc78f3cd',
        },
        {
          source: 'xCzXirgILRm9fF7gjeb',
          target: 'cd_8119cb085435454180558',
        },
        {
          source: 'AKl8iaVQamqiMaMCF7E',
          target: 'xCzXirgILRm9fF7gjeb',
        },
        {
          source: 'GxZeEGkky88xKxq1r22',
          target: 'GWMF0chbHRKDkENg1hS',
        },
        {
          source: 'GWMF0chbHRKDkENg1hS',
          target: 'AoJc4qPcWeOL7NJwOh6',
        },
      ],
    };
    const mockData = {
      nodes: [
        {
          id: 'vm1234',
          label: '新增报告',
        },
      ],
      edges: [
        {
          source: 'AoJc4qPcWeOL7NJwOh6',
          target: 'vm1234',
        },
      ],
    };

    const graph = new G6.Graph({
      container: 'root',
      width: 1580,
      height: 1080,
      defaultNode: {
        type: 'circle',
        size: 50,
        anchorPoints: [
          [0, 0.5],
          [1, 0.5],
        ],
      },
      defaultEdge: {
        type: 'cubic-horizontal',
      },
      layout: {
        type: 'dagre',
        rankdir: 'LR',
        controlPoints: true,
      },
      modes: {
        default: [
          'drag-canvas',
          {
            type: 'zoom-canvas',
            minZoom: 0.5,
            maxZoom: 2,
          },
        ],
      },
      animate: true,
    });

    graph.data(data);
    graph.render();

    setTimeout(() => {
      const newData = {
        nodes: [...data.nodes, ...mockData.nodes],
        edges: [...data.edges, ...mockData.edges],
      };
      graph.changeData(newData);
    }, 2000);
  });
});
