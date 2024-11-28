// components/NetworkGraph.tsx
import React, { useEffect, useRef } from 'react';
import { Network } from 'vis-network';

interface Relation {
  id: number;
  node: string;
  relation: string;
  target: string;
}

interface GraphProps {
  relations: Relation[];
}

const Graph: React.FC<GraphProps> = ({ relations }) => {
  const networkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (networkRef.current) {
      const nodeMap = new Map<string, number>();
      let nodeId = 1;

      const nodes: { id: number; label: string }[] = [];
      const edges: { from: number | undefined; to: number | undefined; label: string }[] = [];


      relations.forEach((relation) => {
        if (!nodeMap.has(relation.node)) {
          nodeMap.set(relation.node, nodeId);
          nodes.push({ id: nodeId, label: relation.node });
          nodeId++;
        }

        if (!nodeMap.has(relation.target)) {
          nodeMap.set(relation.target, nodeId);
          nodes.push({ id: nodeId, label: relation.target });
          nodeId++;
        }

        edges.push({
          from: nodeMap.get(relation.node),
          to: nodeMap.get(relation.target),
          label: relation.relation,
        });
      });

      const data = { nodes, edges };

      const options = {
        nodes: {
          shape: 'dot',
          size: 30,
          font: {
            color: '#fff',
            size: 16,
            face: 'arial',
            align: 'center',
            vadjust: -10,
          },
          color: {
            background: '#4a90e2',
            border: '#357ABD',
            highlight: {
              background: '#4a90e2',
              border: '#357ABD',
            },
            hover: {
              background: '#4a90e2', 
              border: '#357ABD', 
            },
          },
        },
        edges: {
          color: '#7d2de6',
          smooth: true,
          width: 2,
          font: {
            color: '#fff',
            size: 14,
            align: 'top', // Alinea el texto por encima de la línea
            background: 'none',
            strokeWidth: 0, // px
          },
          arrows: {
            to: {
              enabled: true,
              scaleFactor: 0.3,
            },
          },
        },
        physics: {
          enabled: true,
          stabilization: {
            iterations: 200,
          },
        },
      };

      const network = new Network(networkRef.current, data, options);
      network.once('stabilizationIterationsDone', () => {
        network.fit();
      });
    }
  }, [relations]);

  return <div ref={networkRef} style={{ height: '500px', width: '100%' }} />;
};

export default Graph;
