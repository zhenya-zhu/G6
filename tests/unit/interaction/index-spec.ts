import { Graph } from '../../../src';

describe('test interaction', () => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const graph = new Graph({
    container: div,
    width: 500,
    height: 500,
    nodeStateStyles: {
      selected: {
        fill: 'red'
      }
    },
    imodes: ['brush-select']
  });

  const data = {
    nodes: [
      {
        id: 'node1',
        label: 'node1',
      },
      {
        id: 'node2',
      },
    ],
    edges: [
      {
        id: 'edge1',
        source: 'node1',
        target: 'node2',
      },
      {
        id: 'edge2',
        source: 'node1',
        target: 'node1',
      },
      {
        id: 'edge3',
        source: 'node2',
        target: 'node2',
      },
    ],
  };

  graph.data(data);
  graph.render();

  it('test interaction', () => {
    // expect(getTranslate(graph)).toEqual({x: 0, y: 0});

    // graph.emit('keydown', {key: 'ArrowDown', preventDefault() {}});
    // expect(getTranslate(graph)).not.toEqual({x: 0, y: 0});
  });

});