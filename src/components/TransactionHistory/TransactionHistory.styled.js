import styled from 'styled-components';

export const TransactionTable = styled.table`
    width: 100%;
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.md};
    & th {
        padding: ${p => p.theme.space[3]}px;
        background: ${p => p.theme.colors.primary};
        color: ${p => p.theme.colors.white};
        text-transform: uppercase;
        font-weight: ${p => p.theme.fontWeights.bold};
        border: ${p => p.theme.borders.normal};
        border-radius: ${p => p.theme.radii.md};
    }
    & td {
        padding: ${p => p.theme.space[3]}px;
        color: ${p => p.theme.colors.text};
        border: ${p => p.theme.borders.normal};
        border-radius: ${p => p.theme.radii.md};
        text-align: center;
    }
    & td:first-child:first-letter {
        text-transform: uppercase;
    }
    & tr:nth-child(odd) {
        background-color: ${p => p.theme.colors.silver};
    }
    & tr:nth-child(even) {
        background-color: ${p => p.theme.colors.white};
    }
`;
