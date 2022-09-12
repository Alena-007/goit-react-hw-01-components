import styled from 'styled-components';

export const TransactionTable = styled.table`
    width: 100%;
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.md};
    & th {
        color: ${p => p.theme.colors.white};
        text-transform: uppercase;
        font-weight: ${p => p.theme.fontWeights.bold};
        padding: ${p => p.theme.space[3]}px;
        background: #8b008b;
        border: ${p => p.theme.borders.normal};
        border-radius: ${p => p.theme.radii.md};
    }
    & td {
        padding: ${p => p.theme.space[3]}px;
        color: #696969;
        border: ${p => p.theme.borders.normal};
        border-radius: ${p => p.theme.radii.md};
        text-align: center;
    }
    & td:first-child:first-letter {
        text-transform: uppercase;
    }
    & tr:nth-child(odd) {
        background: #d3d3d3;
    }
    & tr:nth-child(even) {
        background: white;
    }
`;
